const pg = require("pg") //postgresql
const dotenv = require("dotenv")
dotenv.config()

//configuration pour la connection a la base de donnée dans le cas ou la base de données est créée
const pool = new pg.Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
})

//configuration pour la connection a la base de donnée dans le cas ou la base de données n'est pas encore créée
const poolForCreate = new pg.Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
})


module.exports = {pool, poolForCreate}