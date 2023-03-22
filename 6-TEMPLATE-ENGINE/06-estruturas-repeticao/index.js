const express = require('express')
const exphbs = require('express-handlebars')
const app = express()


app.engine('handlebars', exphbs.engine())

app.set('view engine', 'handlebars')

app.get('/dashboard', (req,res) => {

    const items = ["item a", "item b", "item c"]

    res.render("dashboard")
})

app.get('/', (req, res) => {

    const user = {
        name: "Vitor",
        surname: "Mattos",
        age: "27"
    }

    const word = "Teste"

    const auth = true

    const approved = true

    res.render('home', { user: user, word: word, auth: auth})
})

app.listen(3000)