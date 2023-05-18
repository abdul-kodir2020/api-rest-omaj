const router = require("express").Router()

router.get('/',async(req,res)=>{
    res.end("hello produit")
})

module.exports = router