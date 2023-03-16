const express = require('express')

const app = express()
const port = 3000 //Variavel ambiente

const path = require('path')
const basePath = path.join(__dirname, 'templates')

const checkAuth = function(req, res, next){ //next usado para dar prosseguimento nas funções
    req.authStatus = true //verifica usuário autenticado ou não
    if(req.authStatus){
        console.log('está logado!')
        next()
    }else{
        console.log('Não está logado! faça login...')
        next()
    }
}

app.use(checkAuth)

//Cria rota
//função anonima que envia resposta ao usuário
app.get('/', (req, res) =>{
    res.sendFile(`${basePath}/index.html`)
})

//função para quem executa o sistema, quem é o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})