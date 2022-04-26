//Inicia módulo de importação de http e filesystem
const http = require('http')
const fs = require('fs')
//Porta que o servidor usara pra abrir
const port = 3000
//Cria o servidor http
const server = http.createServer((req, res) => {
  //inicia módulo de url
  const urlinfo = require('url').parse(req.url, true)
  //acessa o nome do input dentro do html
  const name = urlinfo.query.name

  if (!name) {
    //Lê arquivo
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(data)
      return res.end()
    })
  } else {
    //Escreve arquivo
    fs.writeFile('arquivo.txt', name, function (err, data) {
      //Redirect para o local onde o texto escrito será enviado
      res.writeHead(302, {
        Location: '/'
      })
      //Recomeça o programa
      return res.end()
    })
  }
})

//Informa mensagem no console em qual porta o servidor foi aberto
server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})
