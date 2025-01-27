# Utiliser une image Node.js comme base
FROM node:18-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers du projet dans le conteneur
COPY . /app

# Installer les dépendances
RUN npm install

# Exposer le port utilisé par le frontend
EXPOSE 3000

# Commande pour démarrer le serveur de développement
CMD ["npm", "start"]
