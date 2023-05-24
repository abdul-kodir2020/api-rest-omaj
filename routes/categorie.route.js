const { createCategorie, getAllCategorie, getOneCategorie, deleteCategorie, updateCategorie } = require("../controllers/categorie.controller")
const authToken = require("../middlewares/token.middleware")

const router = require("express").Router()

router.post('/', authToken,createCategorie)

router.get('/',authToken, getAllCategorie)

router.get('/:id', authToken, getOneCategorie)

router.put('/:id', authToken, updateCategorie)

router.delete('/:id', authToken, deleteCategorie)

module.exports = router