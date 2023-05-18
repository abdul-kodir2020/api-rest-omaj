const express = require("express")
const app = express()

//middlewares

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/',(req,res)=>{
    res.end('hello')
})

app.use('/api/categorie',require("./routes/categorie.route"))
app.use('/api/produit',require("./routes/produit.route"))

app.listen(process.env.PORT_SERVER || 5000,()=>{
    console.log("Serveur démarré")
})

module.exports = app