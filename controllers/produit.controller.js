const Produit = require("../models/produit.model")
const joi = require("joi")

//schema de validation d'un produit 
const schemaAdd = joi.object(
    {
        libelle: joi.string().min(4).required(),
        marque: joi.string().min(4).required(),
        taille: joi.string().min(1).required(),
        quantite: joi.number().min(1).required(),
        prix: joi.number().min(1).required(),
        status: joi.string().min(6).required(),
        categorie_id: joi.number().min(1).required(),
    }
)

module.exports.createProduit = async (req,res)=>{
    //validation
    const {error} = schemaAdd.validate(req.body)
    if (error) return res.status(400).json(error.details[0].message)

    //verification du produit
    const produit = await Produit.getOne(req.body.libelle)
    if(produit) return res.status(400).json("Ce produit existe déjà")

    //creation du produit
    try {
        const produitCreated = await Produit.create(req.body.libelle,req.body.marque,req.body.taille,parseInt(req.body.quantite),req.body.prix,req.body.status,parseInt(req.body.categorie_id))
        res.status(200).json(produitCreated)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports.getAllProduit = async(req, res) => {
    try {
        const produits = await Produit.getAll(req.query)
        res.status(200).json(produits)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports.getOneProduit = async(req,res)=>{
    //validation de l'id
    if(!req.params.id) return res.status(400).json("id non valide")

    try {
       const produit = await Produit.getOne(parseInt(req.params.id))
       console.log(produit)
       res.status(200).send(produit)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports.updateProduit = async(req, res)=>{
    const {error} = schemaAdd.validate(req.body)
    if (error) return res.status(400).json(error.details[0].message)

    //verification du produit
    const produit = await Produit.getOne(req.body.libelle)
    if(produit) return res.status(400).json("Ce libelle existe déjà")

    //verification de l'exixstence du produit
    const produitById = await Produit.getOne(parseInt(req.params.id))
    if(!produitById) return res.status(400).json("Ce produit n'existe pas")

    try {
        await Produit.edit(req.params.id, req.body.libelle,req.body.marque,req.body.taille,parseInt(req.body.quantite),req.body.prix,req.body.status,parseInt(req.body.categorie_id))
        res.status(200).json("Produit modifié")
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports.deleteProduit = async(req,res)=>{
    //validation de l'id
    if(!req.params.id) return res.status(400).json("id non valide")

    //verification de l'exixstence du produit
    const produit = await Produit.getOne(parseInt(req.params.id))
    if(!produit) return res.status(400).json("Ce produit n'existe pas")

    try {
        await Produit.delete(req.params.id)
        res.status(200).json("produit supprimé")
    } catch (error) {
        res.status(400).json(error)
    }
}