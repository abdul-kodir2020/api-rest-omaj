const { createCategorie, getAllCategorie, getOneCategorie, deleteCategorie, updateCategorie } = require("../controllers/categorie.controller")

const router = require("express").Router()

router.post('/create', createCategorie)

router.get('/categories', getAllCategorie)

router.get('/categorie/:id', getOneCategorie)

router.put('/update/:id', updateCategorie)

router.delete('/delete/:id', deleteCategorie)

router.get('/',async(req,res)=>{
    res.end("hello categorie")
})

module.exports = router