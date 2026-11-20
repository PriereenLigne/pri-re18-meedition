package net.priereenligne.app;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.ActivityNotFoundException;
import android.content.ContentValues;
import android.content.Intent;
import android.content.res.AssetFileDescriptor;
import android.content.res.AssetManager;
import android.graphics.Color;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.provider.MediaStore;
import android.util.Base64;
import android.webkit.JavascriptInterface;
import android.webkit.MimeTypeMap;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

/**
 * Prière en Ligne : le site, la Formation Héros de la foi et les Défis bibliques, embarqués dans l'APK.
 * Chaque application est servie depuis les fichiers de l'APK (hors connexion) sous sa propre adresse :
 *   https://priere.appassets.androidplatform.net/    -> assets/www/priere
 *   https://formation.appassets.androidplatform.net/ -> assets/www/formation
 *   https://bible.appassets.androidplatform.net/     -> assets/www/bible
 * Les comptes (Supabase) et l'audio de la Bible utilisent Internet quand il est disponible.
 */
public class MainActivity extends Activity {
    private static final String DOMAIN = ".appassets.androidplatform.net";
    private static final String HOME = "https://priere" + DOMAIN + "/index.html";
    private static final int FILE_CHOOSER = 42;

    private WebView web;
    private ValueCallback<Uri[]> fileCallback;
    private final Map<String, String> mime = new HashMap<>();

    @SuppressLint("SetJavaScriptEnabled")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        mime.put("html", "text/html"); mime.put("htm", "text/html"); mime.put("js", "application/javascript");
        mime.put("mjs", "application/javascript"); mime.put("css", "text/css"); mime.put("json", "application/json");
        mime.put("txt", "text/plain"); mime.put("svg", "image/svg+xml"); mime.put("png", "image/png");
        mime.put("jpg", "image/jpeg"); mime.put("jpeg", "image/jpeg"); mime.put("gif", "image/gif");
        mime.put("webp", "image/webp"); mime.put("ico", "image/x-icon"); mime.put("mp3", "audio/mpeg");
        mime.put("woff2", "font/woff2"); mime.put("woff", "font/woff"); mime.put("ttf", "font/ttf");
        mime.put("webmanifest", "application/manifest+json"); mime.put("xml", "application/xml");

        web = new WebView(this);
        web.setBackgroundColor(Color.WHITE);
        setContentView(web);

        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setDatabaseEnabled(true);
        s.setMediaPlaybackRequiresUserGesture(false);
        s.setAllowFileAccess(false);
        s.setAllowContentAccess(false);
        s.setSupportMultipleWindows(false);
        s.setJavaScriptCanOpenWindowsAutomatically(true);
        s.setUserAgentString(s.getUserAgentString() + " PriereEnLigneApp/" + BuildConfigVersion.name(this));

        web.addJavascriptInterface(new Bridge(), "PriereEnLigneApp");
        web.setWebViewClient(new Client());
        web.setWebChromeClient(new Chrome());
        web.setDownloadListener((url, ua, disposition, mimetype, length) -> {
            if (url.startsWith("blob:") || url.startsWith("data:")) {
                web.evaluateJavascript("window.__pelSave && window.__pelSave(" + jsString(url) + ",'fichier'," + jsString(mimetype) + ")", null);
            } else {
                openExternal(Uri.parse(url));
            }
        });

        if (savedInstanceState != null) web.restoreState(savedInstanceState);
        else web.loadUrl(HOME);
    }

    @Override
    protected void onSaveInstanceState(Bundle out) {
        super.onSaveInstanceState(out);
        web.saveState(out);
    }

    @Override
    public void onBackPressed() {
        if (web.canGoBack()) web.goBack();
        else super.onBackPressed();
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == FILE_CHOOSER && fileCallback != null) {
            fileCallback.onReceiveValue(WebChromeClient.FileChooserParams.parseResult(resultCode, data));
            fileCallback = null;
        }
    }

    // ---------- fichiers de l'APK ----------
    private WebResourceResponse serve(WebResourceRequest req) {
        Uri u = req.getUrl();
        String host = u.getHost();
        if (host == null || !host.endsWith(DOMAIN)) return null;
        String app = host.substring(0, host.length() - DOMAIN.length());
        if (!app.equals("priere") && !app.equals("formation") && !app.equals("bible")) return notFound();
        String path = u.getPath() == null ? "/" : u.getPath();
        try { path = URLDecoder.decode(path.replace("+", "%2B"), "UTF-8"); } catch (Exception ignored) { }
        if (path.contains("..")) return notFound();
        if (path.equals("/sw.js")) return notFound(); // l'APK contient déjà tout : pas de service worker

        String base = "www/" + app;
        String[] candidates = path.endsWith("/")
                ? new String[]{path + "index.html"}
                : new String[]{path, path + ".html", path + "/index.html"};
        AssetManager am = getAssets();
        for (String c : candidates) {
            String asset = base + c;
            try {
                InputStream in = am.open(asset, AssetManager.ACCESS_STREAMING);
                return respond(am, asset, in, req);
            } catch (FileNotFoundException e) {
                // essayer le suivant
            } catch (IOException e) {
                return notFound();
            }
        }
        if (app.equals("bible") && !path.contains(".")) { // pages Next.js non trouvées -> 404.html
            try { return respondSimple("text/html", 404, am.open(base + "/404.html")); } catch (IOException ignored) { }
        }
        return notFound();
    }

    private WebResourceResponse respond(AssetManager am, String asset, InputStream in, WebResourceRequest req) throws IOException {
        String ext = asset.contains(".") ? asset.substring(asset.lastIndexOf('.') + 1).toLowerCase(Locale.ROOT) : "";
        String type = mime.get(ext);
        if (type == null) type = MimeTypeMap.getSingleton().getMimeTypeFromExtension(ext);
        if (type == null) type = "application/octet-stream";

        String range = req.getRequestHeaders().get("Range");
        if (range == null) range = req.getRequestHeaders().get("range");
        long length = -1;
        try (AssetFileDescriptor fd = am.openFd(asset)) { length = fd.getLength(); } catch (IOException ignored) { }

        if (range != null && length > 0 && range.startsWith("bytes=")) {
            try {
                String[] p = range.substring(6).split(",")[0].trim().split("-", -1);
                long start = p[0].isEmpty() ? Math.max(0, length - Long.parseLong(p[1])) : Long.parseLong(p[0]);
                long end = (p[0].isEmpty() || p.length < 2 || p[1].isEmpty()) ? length - 1 : Math.min(Long.parseLong(p[1]), length - 1);
                if (start <= end && start < length) {
                    long skipped = 0;
                    while (skipped < start) { long k = in.skip(start - skipped); if (k <= 0) break; skipped += k; }
                    Map<String, String> h = headers(type);
                    h.put("Content-Range", "bytes " + start + "-" + end + "/" + length);
                    h.put("Content-Length", String.valueOf(end - start + 1));
                    return new WebResourceResponse(type, null, 206, "Partial Content", h, new Limited(in, end - start + 1));
                }
            } catch (NumberFormatException ignored) { }
        }
        Map<String, String> h = headers(type);
        if (length > 0) h.put("Content-Length", String.valueOf(length));
        return new WebResourceResponse(type, encodingFor(type), 200, "OK", h, in);
    }

    private WebResourceResponse respondSimple(String type, int code, InputStream in) {
        return new WebResourceResponse(type, encodingFor(type), code, code == 200 ? "OK" : "Not Found", headers(type), in);
    }

    private Map<String, String> headers(String type) {
        Map<String, String> h = new HashMap<>();
        h.put("Accept-Ranges", "bytes");
        h.put("Cache-Control", "no-cache");
        h.put("Access-Control-Allow-Origin", "*");
        return h;
    }

    private static String encodingFor(String type) {
        return (type.startsWith("text/") || type.contains("javascript") || type.contains("json") || type.contains("xml")) ? "UTF-8" : null;
    }

    private WebResourceResponse notFound() {
        return new WebResourceResponse("text/plain", "UTF-8", 404, "Not Found", headers("text/plain"),
                new java.io.ByteArrayInputStream("Introuvable".getBytes(StandardCharsets.UTF_8)));
    }

    private static final class Limited extends InputStream {
        private final InputStream in; private long left;
        Limited(InputStream in, long left) { this.in = in; this.left = left; }
        @Override public int read() throws IOException { if (left <= 0) return -1; int b = in.read(); if (b >= 0) left--; return b; }
        @Override public int read(byte[] b, int off, int len) throws IOException {
            if (left <= 0) return -1;
            int n = in.read(b, off, (int) Math.min(len, left)); if (n > 0) left -= n; return n;
        }
        @Override public void close() throws IOException { in.close(); }
    }

    // ---------- liens externes, téléchargements ----------
    private void openExternal(Uri uri) {
        try {
            Intent i = new Intent(Intent.ACTION_VIEW, uri);
            i.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            startActivity(i);
        } catch (ActivityNotFoundException e) {
            Toast.makeText(this, "Aucune application pour ouvrir ce lien.", Toast.LENGTH_SHORT).show();
        }
    }

    private static String jsString(String s) {
        if (s == null) return "''";
        return "'" + s.replace("\\", "\\\\").replace("'", "\\'").replace("\n", "\\n").replace("\r", "") + "'";
    }

    /** Intercepte les téléchargements faits par les pages (PDF d'attestation, image de verset, rappel .ics…). */
    private static final String DOWNLOAD_HOOK =
            "(function(){if(window.__pelHook)return;window.__pelHook=1;" +
            "window.__pelSave=function(href,name,type){fetch(href).then(function(r){return r.blob()}).then(function(b){" +
            "var fr=new FileReader();fr.onload=function(){PriereEnLigneApp.save(String(fr.result),name||'fichier',type||b.type||'')};fr.readAsDataURL(b)})" +
            ".catch(function(e){PriereEnLigneApp.toast('Téléchargement impossible')})};" +
            "function h(a){var u=a&&a.href||'';if(a&&a.hasAttribute&&a.hasAttribute('download')&&(u.indexOf('blob:')===0||u.indexOf('data:')===0)){" +
            "window.__pelSave(u,a.getAttribute('download')||'fichier','');return true}return false}" +
            "var c=HTMLAnchorElement.prototype.click;HTMLAnchorElement.prototype.click=function(){if(!h(this))return c.apply(this,arguments)};" +
            "var d=EventTarget.prototype.dispatchEvent;EventTarget.prototype.dispatchEvent=function(e){if(e&&e.type==='click'&&this instanceof HTMLAnchorElement&&h(this))return false;return d.apply(this,arguments)};" +
            "document.addEventListener('click',function(e){var a=e.target&&e.target.closest&&e.target.closest('a[download]');if(a&&h(a))e.preventDefault()},true);" +
            "})();";

    private final class Bridge {
        @JavascriptInterface
        public void save(String dataUrl, String name, String type) {
            try {
                int comma = dataUrl.indexOf(',');
                String meta = dataUrl.substring(5, comma);
                byte[] bytes = meta.endsWith(";base64")
                        ? Base64.decode(dataUrl.substring(comma + 1), Base64.DEFAULT)
                        : Uri.decode(dataUrl.substring(comma + 1)).getBytes(StandardCharsets.UTF_8);
                if (type == null || type.isEmpty()) type = meta.replace(";base64", "");
                if (type.isEmpty()) type = "application/octet-stream";
                String file = name.replaceAll("[\\\\/:*?\"<>|]", "_");
                if (!file.contains(".")) {
                    String ext = MimeTypeMap.getSingleton().getExtensionFromMimeType(type);
                    if (ext != null) file += "." + ext;
                }
                Uri saved = write(file, type, bytes);
                final String msg = "Enregistré dans Téléchargements : " + file;
                final Uri open = saved; final String t = type;
                runOnUiThread(() -> {
                    Toast.makeText(MainActivity.this, msg, Toast.LENGTH_LONG).show();
                    if (open != null) {
                        try {
                            Intent i = new Intent(Intent.ACTION_VIEW);
                            i.setDataAndType(open, t);
                            i.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION | Intent.FLAG_ACTIVITY_NEW_TASK);
                            startActivity(i);
                        } catch (Exception ignored) { }
                    }
                });
            } catch (Exception e) {
                toast("Téléchargement impossible : " + e.getMessage());
            }
        }

        @JavascriptInterface
        public void toast(String m) {
            runOnUiThread(() -> Toast.makeText(MainActivity.this, m, Toast.LENGTH_SHORT).show());
        }
    }

    private Uri write(String name, String type, byte[] bytes) throws IOException {
        if (Build.VERSION.SDK_INT >= 29) {
            ContentValues v = new ContentValues();
            v.put(MediaStore.Downloads.DISPLAY_NAME, name);
            v.put(MediaStore.Downloads.MIME_TYPE, type);
            v.put(MediaStore.Downloads.RELATIVE_PATH, Environment.DIRECTORY_DOWNLOADS + "/Prière en Ligne");
            Uri uri = getContentResolver().insert(MediaStore.Downloads.EXTERNAL_CONTENT_URI, v);
            if (uri == null) throw new IOException("stockage indisponible");
            try (OutputStream o = getContentResolver().openOutputStream(uri)) { o.write(bytes); }
            return uri;
        } else {
            File dir = getExternalFilesDir(Environment.DIRECTORY_DOWNLOADS);
            if (dir == null) throw new IOException("stockage indisponible");
            dir.mkdirs();
            File f = new File(dir, name);
            try (FileOutputStream o = new FileOutputStream(f)) { o.write(bytes); }
            return null;
        }
    }

    private final class Client extends WebViewClient {
        @Override
        public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
            return serve(request);
        }

        @Override
        public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
            Uri u = request.getUrl();
            String host = u.getHost();
            String scheme = u.getScheme() == null ? "" : u.getScheme();
            if ((scheme.equals("https") || scheme.equals("http")) && host != null && host.endsWith(DOMAIN)) return false;
            if (scheme.equals("blob") || scheme.equals("data") || scheme.equals("about") || scheme.equals("javascript")) return false;
            openExternal(u); // WhatsApp, e-mail, téléphone, sites externes
            return true;
        }

        @Override
        public void onPageFinished(WebView view, String url) {
            view.evaluateJavascript(DOWNLOAD_HOOK, null);
        }
    }

    private final class Chrome extends WebChromeClient {
        @Override
        public boolean onShowFileChooser(WebView view, ValueCallback<Uri[]> callback, FileChooserParams params) {
            if (fileCallback != null) fileCallback.onReceiveValue(null);
            fileCallback = callback;
            try {
                startActivityForResult(params.createIntent(), FILE_CHOOSER);
            } catch (ActivityNotFoundException e) {
                fileCallback = null;
                return false;
            }
            return true;
        }
    }
}
