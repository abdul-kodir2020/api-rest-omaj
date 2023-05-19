const { pool } = require("../config/db");

const Categorie = {

    //modele pour la création d'une catégorie
    async create(nom){
        try {
            const query = 'INSERT INTO categorie (nom) VALUES ($1) RETURNING *'
            const values = [nom.toLowerCase()]
            const categorie = await pool.query(query,values)
            return categorie.rows[0]
        } catch (error) {
            console.log(error)
            throw new Error('Erreur lors de la création de la catégorie')
        }
    },

    //modele pour la récupération de toutes les catégories
    async getAll(){
        try {
            const query = 'SELECT * FROM categorie'
            const categories = await pool.query(query)
            return categories.rows
        } catch (error) {
            console.log(error)
            throw new Error("Erreur lors de la recupération des catégories")
        }
    },

    //modele pour la récupération d'une catégorie
    async getOne(categorieTag){ //cette fonction accepte un entier pour l'id ou un string pour le nom
        try {
            let query = ''
            if (Number.isInteger(categorieTag)) {
                query = 'SELECT * FROM categorie WHERE id = $1'
            } else {
                query = 'SELECT * FROM categorie WHERE nom = $1'
            }
            const categorie = await pool.query(query,[categorieTag])

            return categorie.rows[0]
        } catch (error) {
            console.log(error)
            throw new Error('Erreur lors de la récupération de la catégorie')
        }
    },


    async edit(id, nom){
        try {
            const query = 'UPDATE categorie SET nom = $1 WHERE id = $2 RETURNING *'
            const categorie = await pool.query(query, [nom.toLowerCase(), id])
            return categorie.rows[0]
        } catch (error) {
            console.log(error)
            throw new Error('Erreur lors de la suppression de la catégorie')
        }
    },

    async delete(id){
        try {
            const query = 'DELETE FROM categorie WHERE id = $1'
            await pool.query(query, [id])
        } catch (error) {
            console.log(error)
            throw new Error('Erreur lors de la suppression de la catégorie')
        }
    }
}

module.exports = Categorie