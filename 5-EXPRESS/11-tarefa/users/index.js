const express = require('express')
const router = express.Router()
const path = require('path')
const basePath = path.join(__dirname, '../templates')


router.get('/segundaPagina', (req, res) => {
    res.sendFile(`${basePath}/index2.html`)
})

router.post('/segundaPaginaPost', (req, res) => {
    console.log(req.body)

    const name = req.body.name
    const age = req.body.age
    console.log(`Eu sou o ${name} e tenho ${age} de idade! :D`)

    res.sendFile(`${basePath}/index2.html`)
})

router.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

module.exports = router