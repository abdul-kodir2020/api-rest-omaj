const express = require("express")
const app = express()

//middlewares

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/',(req,res)=>{
    res.send(`
    <!Doctype html>
    <html>
        <head>
            <title>Documentation</title>
            <meta charset='utf-8' />
            <style>
    
            </style>
        </head>
        <body>
            <h1 style="text-align: center">Documentation</h1>
            <h3 style="text-align: center"><a href="https://github.com/abdul-kodir2020/api-rest-omaj/blob/master/README.md">Voir la documentation</a></h3>
        </body>    
    </html
    `)
})

app.use('/api/categories',require("./routes/categorie.route"))
app.use('/api/produits',require("./routes/produit.route"))

app.listen(process.env.PORT_SERVER || 5000,()=>{
    console.log("Serveur démarré")
})

module.exports = app