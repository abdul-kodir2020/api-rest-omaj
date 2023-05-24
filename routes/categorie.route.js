const { createCategorie, getAllCategorie, getOneCategorie, deleteCategorie, updateCategorie } = require("../controllers/categorie.controller")

const router = require("express").Router()

router.post('/', createCategorie)

router.get('/', getAllCategorie)

router.get('/:id', getOneCategorie)

router.put('/:id', updateCategorie)

router.delete('/:id', deleteCategorie)

module.exports = router