//Inicia módulo de importação de http e filesystem
const http = require('http')
const fs = require('fs')
const url = require('url')
//Porta que o servidor usara pra abrir
const port = 3000
//Cria o servidor http
const server = http.createServer((req, res) => {
  //inicia módulo de url
  const q = require('url').parse(req.url, true)
  //acessa o nome do input dentro do html
  const fileName = q.pathname.substring(1)

  if (fileName.includes('html')) {
    if (fs.existsSync(fileName)) {
      fs.readFile(fileName, function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data)
        return res.end()
      })
    } else {
      fs.readFile('404.html', function (err, data) {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.write(data)
        return res.end()
      })
    }
  }
})

//Informa mensagem no console em qual porta o servidor foi aberto
server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})
