const eventEmitter = require('event')
const x = new eventEmitter()

x.on('start', () => {
  console.log('Durante')
})

console.log('Antes')

x.emit('start')

console.log('Depois')
