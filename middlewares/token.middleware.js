const authToken = (req, res, next) => {
    if (req.headers.token !== "ytgjgjsdc54365f4vdf5") return res.status(400).send("Vous n'êtes pas autorisé à éffectuer cette requête")
    next()
}

module.exports = authToken