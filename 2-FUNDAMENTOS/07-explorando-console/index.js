const x = 10
const y = 'Vitor'
const z = [1, 2]

//mais de um valor
console.log(x, y, z)

//Contagem de impressões
console.count('O valor de x é: ${x}, contagem')
console.count('O valor de x é: ${x}, contagem')
console.count('O valor de x é: ${x}, contagem')

//interpolação - Variavel entre String
console.log('O nome é %s, ele será um grande programador!', y)

//Limpar console

setTimeout(() => {
  console.clear()
}, 2000)
