# 📱 Guide complet — France Services Sarcelles
## Mettre l'app en ligne + installer sur iPhone & Android

---

## 🗺️ VUE D'ENSEMBLE — 4 grandes étapes

1. ✅ Installer les outils sur ton PC (15 min)
2. ✅ Tester l'app en local (5 min)
3. ✅ Mettre en ligne sur Vercel (10 min)
4. ✅ Installer sur iPhone et Android (2 min)

---

## ━━━ ÉTAPE 1 — Installer les outils ━━━

### 👉 Installer Node.js
1. Va sur → **https://nodejs.org**
2. Clique sur le bouton vert **"LTS"**
3. Télécharge et lance l'installeur
4. Clique "Suivant" jusqu'à la fin (tout par défaut)

### 👉 Installer Git
1. Va sur → **https://git-scm.com**
2. Clique **"Download"**
3. Lance l'installeur, tout par défaut

### 👉 Vérifier que tout est installé
- Windows : touche `Windows + R` → tape `cmd` → Entrée
- Mac : ouvre **Terminal** (Applications > Utilitaires)

Puis tape :
```
node --version
git --version
```
Tu dois voir deux numéros s'afficher ✅

---

## ━━━ ÉTAPE 2 — Tester l'app en local ━━━

### 👉 Extraire le ZIP
1. Fais un **clic droit** sur `france-services.zip`
2. Clique **"Extraire tout"** (Windows) ou double-clic (Mac)
3. Choisis ton Bureau comme emplacement

### 👉 Ouvrir le terminal dans le dossier
**Windows :**
1. Ouvre le dossier `france-services`
2. Clique dans la barre d'adresse en haut du dossier
3. Tape `cmd` et appuie sur Entrée

**Mac :**
1. Ouvre Terminal
2. Tape `cd ` puis glisse le dossier dans le Terminal

### 👉 Installer et lancer
Tape ces commandes une par une :
```
npm install
```
⏳ Attends 2-3 minutes...

```
npm start
```
✅ L'app s'ouvre dans ton navigateur sur http://localhost:3000

Pour arrêter : `Ctrl + C`

---

## ━━━ ÉTAPE 3 — Mettre en ligne sur Vercel ━━━

### 👉 3a. Créer un compte GitHub
1. Va sur → **https://github.com**
2. Clique **"Sign up"**
3. Renseigne : email, mot de passe, pseudo (ex: rouichi-sarcelles)
4. Vérifie ton adresse Gmail et valide le compte

### 👉 3b. Créer un nouveau dépôt
1. Connecté à GitHub, clique le bouton vert **"New"** (en haut à gauche)
2. "Repository name" : tape `france-services`
3. Laisse sur **Public**
4. ⚠️ NE PAS cocher "Add a README"
5. Clique **"Create repository"**

### 👉 3c. Envoyer le projet sur GitHub
Dans ton terminal (toujours dans le dossier france-services) :

```
git init
git add .
git commit -m "France Services Sarcelles"
git branch -M main
git remote add origin https://github.com/TON_PSEUDO/france-services.git
git push -u origin main
```
⚠️ Remplace **TON_PSEUDO** par ton vrai pseudo GitHub !

Si GitHub demande un mot de passe :
→ Va sur https://github.com/settings/tokens
→ Clique "Generate new token (classic)"
→ Coche "repo" et génère
→ Copie le token et utilise-le comme mot de passe

### 👉 3d. Déployer sur Vercel
1. Va sur → **https://vercel.com**
2. Clique **"Sign Up"** → **"Continue with GitHub"**
3. Autorise l'accès
4. Clique **"Add New Project"**
5. Tu vois `france-services` → clique **"Import"**
6. Laisse tout par défaut
7. Clique **"Deploy"** 🚀

⏳ Attends 1-2 minutes...

✅ **TON APP EST EN LIGNE !**
URL : **https://france-services-tonpseudo.vercel.app**

Note bien cette adresse, c'est celle que tu partageras !

---

## ━━━ ÉTAPE 4 — Installer sur smartphone ━━━

### 📱 Sur iPhone (Safari obligatoire !)
1. Ouvre **Safari** (pas Chrome, pas Firefox : Safari !)
2. Va sur ton URL Vercel
3. Appuie sur l'icône **□↑** (carré avec flèche) en bas de l'écran
4. Fais défiler et appuie sur **"Sur l'écran d'accueil"**
5. Nom : **France Services**
6. Appuie **"Ajouter"**

✅ L'icône apparaît sur ton écran comme une vraie app !
✅ Elle s'ouvre en plein écran, sans la barre Safari

### 🤖 Sur Android (Chrome)
1. Ouvre **Chrome**
2. Va sur ton URL Vercel
3. Appuie sur les **3 points ⋮** en haut à droite
4. Appuie **"Ajouter à l'écran d'accueil"**
5. Nom : **France Services**
6. Appuie **"Ajouter"**

✅ L'icône apparaît sur l'écran d'accueil !
✅ Elle s'ouvre en plein écran comme une app native

---

## ━━━ PARTAGER L'APP ━━━

Une fois en ligne, tu peux partager l'URL avec qui tu veux :
- Par SMS
- Par WhatsApp
- Par email
- Sur le site de la mairie de Sarcelles

Chaque utilisateur pourra l'installer sur son téléphone !

---

## ❓ Problèmes fréquents

| Problème | Solution |
|----------|----------|
| "npm n'est pas reconnu" | Réinstalle Node.js |
| "git n'est pas reconnu" | Réinstalle Git |
| Erreur git push | Vérifie que TON_PSEUDO est correct |
| Page blanche sur Vercel | Attends 5 min et recharge |
| Logo ne s'affiche pas | Normal, le fallback coloré s'affiche |

---

## 📞 Besoin d'aide ?
Reviens dans Claude avec le message d'erreur exact,
je t'aide à le résoudre étape par étape !
