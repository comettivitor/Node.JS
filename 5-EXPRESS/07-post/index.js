const express = require('express')

const app = express()
const port = 3000 //Variavel ambiente

const path = require('path')

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

const basePath = path.join(__dirname, 'templates')


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

app.use(checkAuth)

app.get('/users/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`)
})

app.post('/users/save', (req, res) => {
    console.log(req.body)

    const name = req.body.name
    const age = req.body.age
    console.log(name, age)

    res.sendFile(`${basePath}/userform.html`)
})

//Cria rota
//função anonima que envia resposta ao usuário
app.get('/users/:id', (req, res) => {
    const id = req.params.id

    //leitura da tabela users, resgatando um usuário

    console.log(`buscando usuario ${id}`)
    res.sendFile(`${basePath}/users.html`)
})

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

//função para quem executa o sistema, quem é o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})

