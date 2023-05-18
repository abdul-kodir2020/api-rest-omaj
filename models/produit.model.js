const { pool } = require("../config/db");
const Categorie = require("./categorie.model");

const Produit = {
    async create(libelle,marque,taille,quantite,prix,status,categorie_id){
        try {
            const query = 'INSERT INTO produit (libelle,marque,taille,quantite,prix,status,categorie_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *'
            const values = [libelle.toLowerCase(),marque.toLowerCase(),taille.toLowerCase(),quantite,prix,status.toLowerCase(),categorie_id]
            const resultat = await pool.query(query, values)
            return resultat.rows[0]
        } catch (error) {
            console.log(error)
            throw new Error("Erreur lors de la création du produit")
        }
    },

    async getAll(tag){//ce parametre est l'objet qui contient les variables passées en parametre de la requete; tag.filter: le filtre (categorie, taille, etc...) et tag.value : la valeur du filtre 
         try {
            let query = ''
            let produits = null

            if (!tag.filtre) {//recuperation de tous les produits

                query = 'SELECT * FROM produit'
                produits = await pool.query(query)
                return produits.rows

            }else if (tag.filtre.toLowerCase() === 'categorie') {//recuperation des produits d'une categorie (string)

                const categorie = await Categorie.getOne(tag.value.toLowerCase())//recherche de l'id de la categorie
                query = 'SELECT * FROM produit WHERE categorie_id = $1'
                produits = await pool.query(query, [categorie.id])
                return produits.rows

            }else if (tag.filtre.toLowerCase() === 'marque') {//recuperation des produits d'une marque

                query = 'SELECT * FROM produit WHERE marque = $1'

            }else if (tag.filtre.toLowerCase() === 'taille') {//recuperation des produits d'une taille

                query = 'SELECT * FROM produit WHERE taille = $1'

            }
            else if (tag.filtre.toLowerCase() === 'prix') {//recuperation des produits d'une taille

                query = 'SELECT * FROM produit WHERE prix <= $1'
                produits = await pool.query(query, [parseFloat(tag.value)])
                return produits.rows

            }else if (tag.filtre.toLowerCase() === 'stock') {//par quantite 0 ou 1

                query = 'SELECT * FROM produit WHERE quantite = 1'
                produits = await pool.query(query)
                return produits.rows

            }else if (tag.filtre.toLowerCase() === 'status') {//par status

                query = 'SELECT * FROM produit WHERE status = $1'

            }

            produits = await pool.query(query, [tag.value.toLowerCase()])
            return produits.rows

        } catch (error) {
            console.log(error)
            throw new Error("Erreur lors de la recupération des produits")
        }
    },


    async getOne(produitTag){ //cette fonction accepte un entier pour l'id ou un string pour le libelle
        try {
            let query = ''
            if (Number.isInteger(produitTag)) {
                query = 'SELECT * FROM produit WHERE id = $1'
            } else {
                query = 'SELECT * FROM produit WHERE libelle = $1'
            }
            const produit = await pool.query(query,[produitTag])

            return produit.rows[0]
        } catch (error) {
            console.log(error)
            throw new Error('Erreur lors de la récupération du produit')
        }
    },

    async edit(id, libelle,marque,taille,quantite,prix,status,categorie_id){
        try {
            const query = `
                UPDATE produit 
                SET libelle = $1, marque = $2, taille = $3, quantite = $4, prix = $5, status = $6, categorie_id = $7
                WHERE id = $8
            `
            const values = [libelle,marque,taille,quantite,prix,status,categorie_id, id]
            const updated = await pool.query(query, values)
            return updated.rows[0]
        } catch (error) {
            console.log(error)
            throw new Error('Erreur lors de la suppression de la catégorie')
        }
    },

    async delete(id){
        try {
            const query = 'DELETE FROM produit WHERE id = $1'
            await pool.query(query, [id])
        } catch (error) {
            console.log(error)
            throw new Error('Erreur lors de la suppression du produit')
        }
    }
}

module.exports = Produit