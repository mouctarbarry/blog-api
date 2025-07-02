# Blog API (Sandbox project for demo & test purpose)

Une API de blog construite avec **TypeScript** et **Node.js**.

## Prérequis

- **Node.js** (v18+)
- **npm** (inclus avec Node.js)
- **Docker** (optionnel, pour exécuter avec un conteneur)

## Installation

1. Clonez le dépôt :
   ```bash
   git clone git@github.com:mouctarbarry/blog-api.git
   cd blog-api
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Configurez les variables d'environnement :
    - Créez un fichier `.env.local` basé sur le modèle `.env.example`.

4. Lancez l'application en mode développement :
   ```bash
   npm run dev
   ```

## Utilisation avec Docker

1. Construisez l'image Docker :
   ```bash
   docker run -p 3000:3000 -e MONGODB_URI="mongodb://username:password@localhost:27017/database?authSource=admin" mouctarbarry/blog-api:latest
   ```

2. Exécutez le conteneur :
   ```bash
   docker run -p 3000:3000 mouctar/blog-api:latest
   ```

## Scripts npm

- **`npm run dev`** : Démarre l'application en mode développement.
- **`npm run build`** : Compile le code TypeScript.
- **`npm start`** : Démarre l'application en production.

## Auteur

**Mouctar**
