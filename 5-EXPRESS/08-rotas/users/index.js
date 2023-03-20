const express = require('express')
const router = express.Router()
const path = require('path')


const basePath = path.join(__dirname, '../templates')

const checkAuth = function (req, res, next) { //next usado para dar prosseguimento nas funções
    req.authStatus = true //verifica usuário autenticado ou não
    if (req.authStatus) {
        console.log('está logado!')
        next()
    } else {
        console.log('Não está logado! faça login...')
        next()
    }
}

router.use(checkAuth)

router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`)
})

router.post('/save', (req, res) => {
    console.log(req.body)

    const name = req.body.name
    const age = req.body.age
    console.log(name, age)

    res.sendFile(`${basePath}/userform.html`)
})

//Cria rota
//função anonima que envia resposta ao usuário
router.get('/:id', (req, res) => {
    const id = req.params.id

    //leitura da tabela users, resgatando um usuário

    console.log(`buscando usuario ${id}`)
    res.sendFile(`${basePath}/users.html`)
})

router.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

module.exports = router