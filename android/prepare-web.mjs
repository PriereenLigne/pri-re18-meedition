#!/usr/bin/env node
// Prépare le contenu web embarqué dans l'APK Prière en Ligne.
// Usage : node android/prepare-web.mjs --site <dossier> --heros <dossier> --bible <dossier> --out <dossier>
//
// Trois applications, chacune servie hors connexion sous sa propre adresse dans l'APK :
//   https://priere.appassets.androidplatform.net/    -> le site Prière en Ligne
//   https://formation.appassets.androidplatform.net/ -> Formation Héros de la foi
//   https://bible.appassets.androidplatform.net/     -> Défis bibliques (Bible Challenge)
// Les polices et bibliothèques externes sont téléchargées et copiées localement.
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import os from "node:os";

const args = Object.fromEntries(process.argv.slice(2).reduce((a, v, i, l) => (v.startsWith("--") ? [...a, [v.slice(2), l[i + 1]]] : a), []));
for (const k of ["site", "heros", "bible", "out"]) if (!args[k]) { console.error(`--${k} manquant`); process.exit(1); }
const SITE = path.resolve(args.site), HEROS = path.resolve(args.heros), BIBLE = path.resolve(args.bible), OUT = path.resolve(args.out);

const H = (n) => `https://${n}.appassets.androidplatform.net`;
const WEB = { heros: "https://heros-de-la-foi.vercel.app", bible: "https://bible-challenge-eta.vercel.app" };
// Clés publiques (anon) : faites pour le navigateur, la sécurité vient des règles RLS de Supabase.
const HEROS_SUPABASE = { url: "https://ggsrvnypzbarukeibmtp.supabase.co", anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdnc3J2bnlwemJhcnVrZWlibXRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTUwODcyNDIsImV4cCI6MjExMDY2MzI0Mn0.6XZ9cvPO3Gh75YIsrwf0D4PpuhLU-Izvq2IzQlBySUo" };
export const BIBLE_SUPABASE = { url: "https://yfvrhdsfskcfwfdeixhz.supabase.co", anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlmdnJoZHNmc2tjZndmZGVpeGh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI0ODg3NTAsImV4cCI6MjEwODA2NDc1MH0.qSBTdBg1r9ieqz6hrYqnWaWv4hdNQHbMRCJnQNo1tAc" };

// Dossiers ignorés à la racine de chaque projet (sources, serveur, outils)
const SKIP = new Set(["node_modules", "android", "supabase", "api", "contenu", "out"]);
function copyDir(src, dst, top = true) {
  fs.mkdirSync(dst, { recursive: true });
  for (const e of fs.readdirSync(src, { withFileTypes: true })) {
    if ((top && SKIP.has(e.name)) || e.name.startsWith(".") || e.name === "node_modules") continue;
    const s = path.join(src, e.name), d = path.join(dst, e.name);
    if (e.isDirectory()) copyDir(s, d, false); else if (e.isFile()) fs.copyFileSync(s, d);
  }
}
function walk(dir, exts, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, exts, out); else if (exts.some((x) => e.name.endsWith(x))) out.push(p);
  }
  return out;
}
function replaceOnce(file, from, to) {
  const t = fs.readFileSync(file, "utf8");
  if (!t.includes(from)) throw new Error(`Motif introuvable dans ${file} : ${from.slice(0, 80)}`);
  fs.writeFileSync(file, t.split(from).join(to));
}

// ---------- ressources externes (polices Google, bibliothèques CDN) ----------
const UA = "Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Mobile Safari/537.36";
async function get(url, binary) {
  const r = await fetch(url, { headers: { "User-Agent": UA } });
  if (!r.ok) throw new Error(`${r.status} ${url}`);
  return binary ? Buffer.from(await r.arrayBuffer()) : r.text();
}
const npmCache = new Map();
function npmFile(pkg, version, file) {
  const key = `${pkg}@${version}`;
  if (!npmCache.has(key)) {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "pkg-"));
    const tgz = execFileSync("npm", ["pack", key, "--silent", "--pack-destination", dir], { encoding: "utf8" }).trim().split("\n").pop();
    execFileSync("tar", ["-xzf", path.join(dir, tgz), "-C", dir]);
    npmCache.set(key, path.join(dir, "package"));
  }
  return fs.readFileSync(path.join(npmCache.get(key), file));
}
// Bibliothèques CDN : récupérées depuis le registre npm (même fichier publié).
async function cdnFile(url) {
  let m = url.match(/^https:\/\/cdn\.jsdelivr\.net\/npm\/((?:@[^/]+\/)?[^@/]+)@([^/]+)\/(.+)$/);
  if (m) return npmFile(m[1], m[2], m[3]);
  m = url.match(/^https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/jspdf\/([^/]+)\/(.+)$/);
  if (m) return npmFile("jspdf", m[1], "dist/" + m[2]);
  return get(url, true);
}
let fontN = 0;
async function vendor(root) {
  const vdir = path.join(root, "_hors-ligne");
  fs.mkdirSync(vdir, { recursive: true });
  const done = new Map();
  async function localFor(url) {
    if (done.has(url)) return done.get(url);
    let local;
    if (url.startsWith("https://fonts.googleapis.com/css")) {
      let css = await get(url);
      const fonts = [...new Set(css.match(/https:\/\/fonts\.gstatic\.com\/[^)'"\s]+/g) || [])];
      for (const f of fonts) {
        const name = `police-${++fontN}${path.extname(new URL(f).pathname) || ".woff2"}`;
        fs.writeFileSync(path.join(vdir, name), await get(f, true));
        css = css.split(f).join(name);
      }
      local = `polices-${done.size + 1}.css`;
      fs.writeFileSync(path.join(vdir, local), css);
    } else {
      local = path.basename(new URL(url).pathname);
      fs.writeFileSync(path.join(vdir, local), await cdnFile(url));
    }
    done.set(url, "/_hors-ligne/" + local);
    console.log(`  ${url} -> ${done.get(url)}`);
    return done.get(url);
  }
  const RE = /https:\/\/(?:fonts\.googleapis\.com\/css2?\?[^"')\s]+|cdn\.jsdelivr\.net\/npm\/[^"')\s]+\.js|cdnjs\.cloudflare\.com\/ajax\/libs\/[^"')\s]+\.js)/g;
  for (const file of walk(root, [".html", ".css"])) {
    if (file.startsWith(vdir)) continue;
    let t = fs.readFileSync(file, "utf8");
    const urls = [...new Set(t.match(RE) || [])];
    if (!urls.length) continue;
    for (const u of urls) t = t.split(u).join(await localFor(u.replace(/&amp;/g, "&")));
    fs.writeFileSync(file, t);
  }
}

// ---------- 1. Site Prière en Ligne ----------
async function site() {
  const out = path.join(OUT, "priere");
  copyDir(SITE, out);
  for (const f of walk(out, [".html", ".js", ".css"])) {
    let t = fs.readFileSync(f, "utf8"), t0 = t;
    t = t.split(WEB.heros).join(H("formation")).split(WEB.bible).join(H("bible"));
    if (t !== t0) fs.writeFileSync(f, t);
  }
  await vendor(out);
}

// ---------- 2. Formation Héros de la foi ----------
async function heros() {
  const out = path.join(OUT, "formation");
  copyDir(HEROS, out);
  fs.rmSync(path.join(out, "sw.js"), { force: true });
  // Configuration Supabase intégrée (plus besoin de /api/config, qui n'existe que sur Vercel)
  replaceOnce(path.join(out, "commun.js"),
    `fetch("/api/config", {cache:"no-store"}).then(r=>r.ok?r.json():{}).catch(()=>{ horsLigne=true; return {}; })`,
    `Promise.resolve(${JSON.stringify(HEROS_SUPABASE)})`);
  const app = path.join(out, "app.js");
  // Liens reçus par e-mail : ils doivent ouvrir le site web, pas l'adresse interne de l'APK
  replaceOnce(app, `emailRedirectTo:location.origin`, `emailRedirectTo:${JSON.stringify(WEB.heros)}`);
  replaceOnce(app, `{redirectTo:location.origin}`, `{redirectTo:${JSON.stringify(WEB.heros)}}`);
  replaceOnce(path.join(out, "enseignant.js"), `{redirectTo:location.origin+location.pathname}`, `{redirectTo:${JSON.stringify(WEB.heros + "/enseignant.html")}}`);
  // Hors connexion : on garde une copie des données de l'étudiant sur le téléphone pour continuer à lire les cours
  replaceOnce(app, `  const [p, g, t, su, ph] = await Promise.all([`, `  let [p, g, t, su, ph] = await Promise.all([`);
  replaceOnce(app, `  if(p.error) throw p.error; if(g.error) throw g.error;\n  S.profil =`,
`  const cleHL = "hdf-apk-etu-" + uid;
  const coupe = x => x && x.error && (!navigator.onLine || /fetch|network|réseau|Failed/i.test(String(x.error.message || x.error)));
  if (coupe(p) || coupe(g)) {
    let c = null; try { c = JSON.parse(localStorage.getItem(cleHL) || "null"); } catch(e) {}
    if (c) { p = {data:c.p}; g = {data:c.g}; t = {data:c.t}; su = {data:c.su}; ph = {data:c.ph}; S.horsLigneApk = true; toast("Hors connexion : affichage de vos données enregistrées sur ce téléphone."); }
  } else if (!p.error && !g.error) {
    S.horsLigneApk = false;
    const snap = {p:p.data, g:g.data, t:t.data, su:su.error?null:su.data, ph:(ph&&!ph.error&&ph.data)?ph.data:null};
    try { localStorage.setItem(cleHL, JSON.stringify(snap)); } catch(e) { try { snap.ph = null; localStorage.setItem(cleHL, JSON.stringify(snap)); } catch(e2) {} }
  }
  if(p.error) throw p.error; if(g.error) throw g.error;
  S.profil =`);
  await vendor(out);
}

// ---------- 3. Défis bibliques (export statique Next.js) ----------
function bible() {
  const src = fs.mkdtempSync(path.join(os.tmpdir(), "bible-"));
  copyDir(BIBLE, src);
  fs.writeFileSync(path.join(src, "next.config.mjs"),
    `/** @type {import('next').NextConfig} */\nexport default { reactStrictMode: true, output: "export", trailingSlash: true, images: { unoptimized: true } };\n`);
  for (const f of ["src/components/TeamDetail.tsx", "src/app/connexion/page.tsx", "src/lib/reminders/export.ts"])
    replaceOnce(path.join(src, f), "window.location.origin", JSON.stringify(WEB.bible));
  const env = { ...process.env, NEXT_PUBLIC_SUPABASE_URL: BIBLE_SUPABASE.url, NEXT_PUBLIC_SUPABASE_ANON_KEY: BIBLE_SUPABASE.anonKey, NEXT_TELEMETRY_DISABLED: "1" };
  execFileSync("npm", ["ci", "--no-audit", "--no-fund"], { cwd: src, stdio: "inherit", env });
  execFileSync("npx", ["next", "build"], { cwd: src, stdio: "inherit", env });
  const out = path.join(OUT, "bible");
  fs.cpSync(path.join(src, "out"), out, { recursive: true });
  fs.rmSync(path.join(out, "sw.js"), { force: true });
}

fs.rmSync(OUT, { recursive: true, force: true });
console.log("Site Prière en Ligne…"); await site();
console.log("Formation Héros de la foi…"); await heros();
console.log("Défis bibliques…"); bible();
console.log("Contenu prêt dans", OUT);
