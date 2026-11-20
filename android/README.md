# Application Android Prière en Ligne

L'APK regroupe trois applications, toutes utilisables **hors connexion** :

| Adresse dans l'APK | Contenu | Source |
|---|---|---|
| `https://priere.appassets.androidplatform.net/` | Le site Prière en Ligne (programmes, requêtes, audios, jeux) | ce dépôt |
| `https://formation.appassets.androidplatform.net/` | Formation Héros de la foi | `melchipasteur-ops/heros-de-la-foi` |
| `https://bible.appassets.androidplatform.net/` | Défis bibliques (Bible Challenge) | `PriereenLigne/bible-challenge` |

Ces adresses n'existent pas sur Internet : l'application sert les fichiers depuis l'APK.
Les comptes (Supabase), les examens de la formation et l'audio de la Bible utilisent Internet quand il est disponible.
Hors connexion, la formation affiche la dernière copie des données de l'étudiant enregistrée sur le téléphone.

## Construction

Automatique : le workflow `.github/workflows/android-apk.yml` construit l'APK à chaque changement dans `android/`
(ou manuellement depuis l'onglet **Actions**, « APK Android », « Run workflow ») et le publie dans les **Releases**.

Lien de téléchargement permanent de la dernière version :
`https://github.com/PriereenLigne/pri-re18-meedition/releases/latest/download/PriereEnLigne.apk`

En local (Node 22, JDK 17, Android SDK 34) :

```sh
node android/prepare-web.mjs --site . --heros ../heros-de-la-foi --bible ../bible-challenge --out android/app/src/main/assets/www
cd android && gradle assembleRelease
```

## Signature

Sans secret, l'APK est signé avec une clé de test générée à chaque construction : pour installer une nouvelle
version, il faut alors désinstaller l'ancienne. Pour des mises à jour directes (et pour le Play Store), créez une clé
privée (`keytool -genkeypair -keystore release.keystore -alias priereenligne -keyalg RSA -keysize 2048 -validity 10000`)
et ajoutez dans **Settings → Secrets and variables → Actions** du dépôt :
`ANDROID_KEYSTORE_BASE64` (le fichier encodé en base64), `ANDROID_KEYSTORE_PASSWORD`, `ANDROID_KEY_ALIAS`, `ANDROID_KEY_PASSWORD`.
Ne mettez jamais la clé elle-même dans le dépôt.
