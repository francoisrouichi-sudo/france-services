# 🇫🇷 France Services - Portail Citoyen

Application mobile pour accéder aux 9 partenaires France Services.

---

## 🚀 Mise en ligne sur Vercel (gratuit)

### Étape 1 — Installer les outils (une seule fois)
Télécharge et installe :
- **Node.js** : https://nodejs.org (version LTS recommandée)
- **Git** : https://git-scm.com

### Étape 2 — Préparer le projet
Ouvre un terminal (cmd ou PowerShell sur Windows) et tape :

```bash
cd france-services
npm install
```

### Étape 3 — Tester en local
```bash
npm start
```
→ L'app s'ouvre sur http://localhost:3000

### Étape 4 — Créer un compte GitHub
Va sur https://github.com et crée un compte gratuit.

Puis crée un nouveau dépôt nommé `france-services` (sans README).

### Étape 5 — Envoyer le projet sur GitHub
Dans le terminal :
```bash
git init
git add .
git commit -m "France Services app"
git branch -M main
git remote add origin https://github.com/TON_PSEUDO/france-services.git
git push -u origin main
```
*(remplace TON_PSEUDO par ton nom d'utilisateur GitHub)*

### Étape 6 — Déployer sur Vercel
1. Va sur https://vercel.com
2. Clique **"Sign up"** → connecte-toi avec ton compte GitHub
3. Clique **"Add New Project"**
4. Sélectionne ton dépôt `france-services`
5. Clique **"Deploy"**

✅ En 2 minutes, ton app est en ligne avec une URL du type :
**https://france-services-tonpseudo.vercel.app**

---

## 📱 Installer sur smartphone (PWA)

Une fois en ligne, les utilisateurs peuvent installer l'app :
- **iPhone** : Safari → partager → "Sur l'écran d'accueil"
- **Android** : Chrome → menu → "Ajouter à l'écran d'accueil"

---

## 🛠 Structure des fichiers

```
france-services/
├── public/
│   ├── index.html       ← Page HTML principale
│   └── manifest.json    ← Config PWA (icône, nom...)
├── src/
│   ├── App.js           ← Composant principal de l'app
│   ├── index.js         ← Point d'entrée React
│   └── index.css        ← Styles globaux
├── package.json         ← Dépendances du projet
└── README.md            ← Ce fichier
```
