const x = 10

//checar se x é um numero
if (!Number.isInteger(x)) {
  throw new Error('O valor de x não é um inteiro')
}

console.log('Continuando Código...')
