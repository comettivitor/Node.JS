const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

const hbs = exphbs.create({
    partialsDir: ["views/partials"]
})

app.engine('handlebars', hbs.engine)

app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {

    const items = ["item a", "item b", "item c"]

    res.render("dashboard")
})

app.get('/blog', (req, res) => {
    const posts = [{
        title: 'Aprender NodeJS',
        category: 'Javascript',
        body: 'Este artigo vai te ajudar a aprender NodeJS',
        comments: 4,
    },
    {
        title: 'Aprender Java',
        category: 'Java',
        body: 'Este artigo vai te ajudar a aprender Java',
        comments: 6,
    }]

    res.render('blog', {posts})
})

app.get('/post', (req, res) => {
    const post = {
        title: 'Aprender nodeJS',
        category: 'Javascript',
        body: 'Este artigo vai te ajudar a aprender NodeJS',
        comments: 4,
    }

    res.render('blogpost', { post })
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

    res.render('home', { user: user, word: word, auth: auth })
})

app.listen(3000)