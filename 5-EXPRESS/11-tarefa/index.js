const express = require('express')
const app = express()
const port = 5000
const users = require('./users')

app.use(express.urlencoded({
    extended: true,
}),
)

app.use(express.json())

app.use(express.static('public'))

app.use('/', users)

app.listen(port, () => {
    console.log(`Servidor iniciado na porta: ${port}`)
})