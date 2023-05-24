const { createProduit, getAllProduit, deleteProduit, getOneProduit, updateProduit } = require("../controllers/produit.controller")

const router = require("express").Router()

router.post('/', createProduit)

router.get('/', getAllProduit)

router.get('/:id', getOneProduit)

router.put('/:id', updateProduit)

router.delete('/:id', deleteProduit)

module.exports = router