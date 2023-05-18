# api-rest-omaj
SImple API CRUD de catalogue produit. Cette API permet de faire :

  De lister des catégories d'articles.

  D'ajouter ou d'éditer une catégorie / un produit. 
  
  De supprimer une catégorie / un produit. 
  
  De mettre à jour une catégorie / un produit. 
  
  De lister les produits disponibles (en stock) en fonction d'un certain nombre de critères : 
    
   Sa catégorie. 
   
   Sa marque. 
      
   sa taille. 
      
   Sa quantité (0 ou 1) 
      
   Son status (Accepté ou En attente) 
      
   Son prix

Environnement technique : Nodejs, Express, postgresql, postman

# initialisation en local

1. npm install
2. Ajoutez un fichier .env a la racine du dossier et ajoutez y ce code:
      
      
        PORT_SERVER = 5000
        DB_NAME = apirestdatabaseomaj
        DB_USER = NOM_UTILISATEUR_POSTGRESQL (remplacez le par votre nom d'utilisateur postgresql)
        DB_PASSWORD = MOT_DE_PASSE_POSTGRESQL (remplacez le par votre mot de passe postgresql)
        BD_HOST = localhost
        DB_PORT = 5432     
      
3. npm run db-init : pour la création de la base de donnée postgresql, des tables et des données catégorie et produit
4. npm run start : pour démarrer le serveur local

# Création de données

Chemin du script pour la création de données : /config/db-init.js . La commande npm run db-init permet de l'executer

# Documentation

## Les routes pour la table categorie en local

Créer une catégorie : ( Proprietés : nom ) 

      http://localhost:5000/api/categorie/create

Récupérer toutes les catégories : 

      http://localhost:5000/api/categorie/categories
      
Récuperer une catégorie : 

      http://localhost:5000/api/categorie/categorie/:id
      
Modifier une categorie : ( Proprietés : nom ) 

      http://localhost:5000/api/categorie/update/:id
      
Supprimer une categorie : 

      http://localhost:5000/api/categorie/delete/1
      
 ## Les routes pour la table produit en local
 
 Créer un produit : ( data : libelle, marque, taille, quantite(0 ou 1), prix(ex: 50),  status(En attente ou accepte), categorie_id) 

      http://localhost:5000/api/produit/create

Récupérer tous les produits : 

      http://localhost:5000/api/produit/produits
      
Récupérer tous les produits d'une marque: 

      http://localhost:5000/api/produit/produits?filtre=marque&value=NOM_DE_LA_MARQUE
      
Récupérer tous les produits par taille: 

      http://localhost:5000/api/produit/produits?filtre=taille&value=VALEUR_DE_LA_TAILLE
      
Récupérer tous les produits disponibles en stock: 

      http://localhost:5000/api/produit/produits?filtre=stock
      
Récupérer tous les produits par status: 

      http://localhost:5000/api/produit/produits?filtre=status&value=STATUS
      
Récuperer un produit : 

      http://localhost:5000/api/produit/produit/:id
      
Modifier un produit : ( data : libelle, marque, taille, quantite(0 ou 1), prix(ex: 50),  status(En attente ou accepte), categorie_id ) 

      http://localhost:5000/api/produit/update/:id
      
Supprimer un produit : 

      http://localhost:5000/api/produit/delete/:id
      
      
# Bonus

J'ai ecris un fichier de test unitaire avec les packages de test mocha chai supertest. Le fichier : /test/api.test.js 

Pour l'executer : 

1. Femer psql shell et pgadmin
2. refaite la commande : 

       npm run db-init
       
3. Coupez le serveur et entrez la commande :  

       npx mocha
