const Categorie = require("../models/categorie.model")

module.exports.createCategorie = async (req,res)=>{
    //validation du nom
    if(!req.body.nom) return res.status(400).json("nom de la categorie non valide")

    //verification de la categorie
    const categorie = await Categorie.getOne(req.body.nom)
    if(categorie) return res.status(400).json("Cette catégorie existe déjà")

    //creation de la categorie
    try {
        const categorieCreated = await Categorie.create(req.body.nom)
        res.status(200).json(categorieCreated)
    } catch (error) {
        res.status(400).json(error)
    }
    
}

module.exports.getAllCategorie = async(req, res) => {
    try {
        const categories = await Categorie.getAll()
        res.status(200).json(categories)
    } catch (error) {
        res.status(400).json(error)
    }
    
}

module.exports.getOneCategorie = async(req,res)=>{
    //validation de l'id
    if(!req.params.id) return res.status(400).json("id non valide")

    try {
       const categorie = await Categorie.getOne(parseInt(req.params.id))
       console.log(categorie)
       res.status(200).send(categorie)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports.updateCategorie = async(req, res)=>{
    //validation du nom
    if(!req.body.nom) return res.status(400).json("nom de la categorie non valide")

    //verification de la categorie
    const categorie = await Categorie.getOne(req.body.nom)
    if(categorie) return res.status(400).json("Cette catégorie existe déjà")

    //validation de l'id
    if(!req.params.id) return res.status(400).json("id non valide")

    //verification de l'exixstence de la categorie
    const categorieById = await Categorie.getOne(parseInt(req.params.id))
    if(!categorieById) return res.status(400).json("Cette categorie n'existe pas")

    try {
        const categorieUpdated = await Categorie.edit(req.params.id, req.body.nom)
        res.status(200).json(categorieUpdated)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports.deleteCategorie = async(req,res)=>{
    //validation de l'id
    if(!req.params.id) return res.status(400).json("id non valide")

    //verification de l'exixstence de la categorie
    const categorie = await Categorie.getOne(parseInt(req.params.id))
    if(!categorie) return res.status(400).json("Cette categorie n'existe pas")

    try {
        await Categorie.delete(req.params.id)
        res.status(200).json("Catégorie supprimée")
    } catch (error) {
        res.status(400).json(error)
    }
}