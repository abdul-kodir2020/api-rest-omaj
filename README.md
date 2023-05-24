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

1. Installer les dependances : 
  
        npm install
3. Ajoutez un fichier .env a la racine du dossier et ajoutez y ce code:
      
      
        PORT_SERVER = 5000
        DB_NAME = apirestdatabaseomaj
        DB_USER = NOM_UTILISATEUR_POSTGRESQL (remplacez le par votre nom d'utilisateur postgresql)
        DB_PASSWORD = MOT_DE_PASSE_POSTGRESQL (remplacez le par votre mot de passe postgresql)
        BD_HOST = localhost
        DB_PORT = 5432     
      
3. Pour la création de la base de donnée postgresql, des tables et des données catégorie et produit : 
          
        npm run db-init 
4. Pour démarrer le serveur local : 

         npm run dev

# Création de données

Chemin du script pour la création de données : /config/db-init.js . La commande npm run db-init permet de l'executer

# Documentation

## Les routes pour la table categorie en local

Créer une catégorie : ( Proprietés : nom ) 

      Type de requête : POST
      http://localhost:5000/api/categories

Récupérer toutes les catégories : 
      
      Type de requête : GET
      http://localhost:5000/api/categories
      
      Cette requête retourne un tableau de catégorie
      
      Exemple de résultat : 
      [ 
        { id: 1, 
          nom: 'veste' 
        }, 
        { id: 2, 
          nom: 'robe' 
        } 
      ]
       
Récuperer une catégorie : 
  
      Type de requête : GET
      http://localhost:5000/api/categories/:id
      
      Cette requête retourne une catégorie
      
      exemple de résultat : 
      
      { 
        id: 1, 
        nom: 'veste' 
      }
      
      
Modifier une categorie : ( Proprietés : nom ) 
      
      Type de requête : PUT
      http://localhost:5000/api/categories/:id
      
Supprimer une categorie : 
  
      Type de requête : DELETE
      http://localhost:5000/api/categories/1
      
 ## Les routes pour la table produit en local
 
 Créer un produit : ( data : libelle, marque, taille, quantite(0 ou 1), prix(ex: 50),  status(En attente ou accepte), categorie_id) 
 
      Type de requête : POST
      http://localhost:5000/api/produits

Récupérer tous les produits (Vous pouvez preciser le filtre ex: marque=zara ou categorie=veste)

Exemple de requête :

    
      Type de requête : GET
      http://localhost:5000/api/produits
      http://localhost:5000/api/produits?categorie=veste
      http://localhost:5000/api/produits?categorie=veste&prix=50
      http://localhost:5000/api/produits?categorie=veste&prix=50&quantite=1
      http://localhost:5000/api/produits?categorie=veste&prix=50&quantite=1&status=accepte
      http://localhost:5000/api/produits?categorie=veste&prix=50&quantite=1&status=accepte&marque=Zara
      http://localhost:5000/api/produits?categorie=veste&prix=50&quantite=1&status=accepte&marque=Zara&taille=40
      
      Cette requête retourne un tableau de produits
      
      Exemple de résultat : 
      
      [
        {
          id: 1,
          libelle: 'veste blazer valentino',
          marque: 'valentino',
          taille: '40/l',
          quantite: 1,
          prix: 54,
          status: 'accepte',
          categorie_id: 1
        },
        {
          id: 2,
          libelle: 'veste en jean jodhpur',
          marque: 'jodhpur',
          taille: '40/l',
          quantite: 1,
          prix: 57,
          status: 'accepte',
          categorie_id: 1
        }
       ]
      
      
Récuperer un produit : 
      
      Type de requête : GET
      http://localhost:5000/api/produits/:id
      
      Cette requête retourne un objet produit
      
      Exemple de résultat : GET http://localhost:5000/api/produits/1
       {
          id: 1,
          libelle: 'veste blazer valentino',
          marque: 'valentino',
          taille: '40/l',
          quantite: 1,
          prix: 54,
          status: 'accepte',
          categorie_id: 1
        }
      
      
Modifier un produit : ( data : libelle, marque, taille, quantite(0 ou 1), prix(ex: 50),  status(En attente ou accepte), categorie_id ) 
      
      Type de requête : PUT
      http://localhost:5000/api/produits/:id
      
Supprimer un produit : 
      
      Type de requête : DELETE
      http://localhost:5000/api/produits/:id
      
      
# Bonus

J'ai ecris un fichier de test unitaire avec les packages de test mocha chai supertest. Le fichier : /test/api.test.js 

Pour l'executer : 

1. Femer psql shell et pgadmin
2. refaite la commande : 

       npm run db-init
       
3. Coupez le serveur et entrez la commande :  

       npx mocha
       
       
# Pour aller plus loin

Pour sécuriser l'utilisation de l'api un champ token dans l'en-tête de la rêquete est requis
      
      key         value
      token       ytgjgjsdc54365f4vdf5
      
Ce système de token peut être améliorer 
