# api-rest-omaj
SImple API CRUD de catalogue produit. Cette API permet de faire :

  De lister des catégories d'articles.
  
  D'ajouter ou d'éditer une catégorie / un produit. 
  De supprimer une catégorie / un produit. 
  De mettre à jour une catégorie / un produit. 
  De lister les produits disponibles (en stock) en fonction d'un certain nombre de critères : 
      Sa catégorie. Sa marque. 
      Sa taille. 
      Sa quantité (0 ou 1) 
      Son status (Accepté ou En attente) 
      Son prix

Environnement technique : Nodejs, Express, postgresql, postman

# initialisation en local

1. npm install
2. npm run db-init : pour la création de la base de donnée postgresql, des tables et des données catégorie et produit
3. npm run start : pour démarré le serveur local

# Création de données

Chemin du script pour la création de données : /config/db-init.js . La commande npm run db-init permet de l'executer

# Documentation
