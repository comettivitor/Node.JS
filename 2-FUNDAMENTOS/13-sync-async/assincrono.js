const fs = require('fs')

console.log('Inicio')

fs.writeFile('arquivo.txt', 'Oi', function (err) {
  setTimeout(function () {
    console.log('Arquivo criado')
  }, 3000)
})

console.log('Fim')
