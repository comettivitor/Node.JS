const express = require('express')

const app = express()
const port = 3000 //Variavel ambiente

const path = require('path')

const users = require('./users')

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())
const basePath = path.join(__dirname, 'templates')

app.use('/users', users)

//função para quem executa o sistema, quem é o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})

