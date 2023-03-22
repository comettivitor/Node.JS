const express = require('express')
const exphbs = require('express-handlebars')
const app = express()


app.engine('handlebars', exphbs.engine())

app.set('view engine', 'handlebars')

app.get('/dashboard', (req,res) => {
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

    res.render('home', { user: user, word: word, auth: auth})
})

app.listen(3000)