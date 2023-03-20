const exp = require('constants')
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

//Arquivos estáticos
app.use(express.static('public'))
const basePath = path.join(__dirname, 'templates')

app.use('/users', users)



app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.use(function(req,res,next) {
    res.status(404).sendFile(`${basePath}/404.html`)
})

//função para quem executa o sistema, quem é o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})

