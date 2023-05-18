/*
    Info:
    Script pour la céation de la base de données, des tableset de quelques données

*/

const dotenv = require("dotenv");
const { pool, poolForCreate } = require("./db");
const Categorie = require("../models/categorie.model");
const Produit = require("../models/produit.model");
const listeProduits = require("./listeProduits");
dotenv.config()


async function createDatabase() {
    let client = await poolForCreate.connect();
    try {
      // Exécution de la requête SQL pour créer la base de données
      await client.query(`DROP DATABASE IF EXISTS ${process.env.DB_NAME}`);
      await client.query(`CREATE DATABASE ${process.env.DB_NAME}`).then(async()=>{
        client.release();
        client = await pool.connect() 
      });

      //table categorie
      await client.query(`CREATE TABLE categorie (
        id SERIAL PRIMARY KEY,
        nom VARCHAR(100) NOT NULL
        )`)

      //table produit
      await client.query(`CREATE TABLE produit (
        id SERIAL PRIMARY KEY,
        libelle VARCHAR(100) NOT NULL,
        marque VARCHAR(100) NOT NULL,
        taille VARCHAR(50),
        quantite INT DEFAULT 1,
        prix VARCHAR(5),
        status VARCHAR(20) CHECK (status IN ('accepte', 'en attente')),
        categorie_id INT NOT NULL,
        FOREIGN KEY (categorie_id) REFERENCES categorie (id) ON DELETE CASCADE ON UPDATE CASCADE
      )`)

      //insertion de categories
      await Categorie.create("Veste")
      await Categorie.create("Robe")

      //insertion de produits
      for (const produit of listeProduits) {
        await Produit.create(produit.libelle,produit.marque,produit.taille,produit.quantite,produit.prix,produit.status,produit.Categorie_id)
      }
      console.log('Base de données créée avec succès.');
    } catch (error) {
      console.error('Erreur lors de la création de la base de données :', error);
    } finally {
      client.release();
    }
  }
  
// Appel de la fonction pour créer la base de données
createDatabase();