const { createProduit, getAllProduit, deleteProduit, getOneProduit, updateProduit } = require("../controllers/produit.controller")

const router = require("express").Router()

router.post('/create', createProduit)

router.get('/produits/', getAllProduit)

router.get('/produit/:id', getOneProduit)

router.put('/update/:id', updateProduit)

router.delete('/delete/:id', deleteProduit)

module.exports = router