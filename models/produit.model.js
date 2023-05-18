const { pool } = require("../config/db");

const Produit = {
    async create(libelle,marque,taille,quantite,prix,status,categorie_id){
        try {
            const query = 'INSERT INTO produit (libelle,marque,taille,quantite,prix,status,categorie_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *'
            const values = [libelle,marque,taille,quantite,prix,status,categorie_id]
            const resultat = await pool.query(query, values)
            return resultat.rows[0]
        } catch (error) {
            throw new Error("Erreur lors de la création du produit")
        }
    }
}

module.exports = Produit