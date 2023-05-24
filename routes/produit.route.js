const { createProduit, getAllProduit, deleteProduit, getOneProduit, updateProduit } = require("../controllers/produit.controller")
const authToken = require("../middlewares/token.middleware")

const router = require("express").Router()

router.post('/', authToken, createProduit)

router.get('/', authToken, getAllProduit)

router.get('/:id', authToken, getOneProduit)

router.put('/:id', authToken, updateProduit)

router.delete('/:id', authToken, deleteProduit)

module.exports = router