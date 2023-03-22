const express = require('express')
const exphbs = require('express-handlebars')
const app = express()


app.engine('handlebars', exphbs.engine())

app.set('view engine', 'handlebars')

app.get('/', (req, res) => {

    const user = {
        name: "Vitor",
        surname: "Mattos",
        age: "27"
    }

    const word = "Teste"

    res.render('home', { user: user, word: word })
})

app.listen(3000)