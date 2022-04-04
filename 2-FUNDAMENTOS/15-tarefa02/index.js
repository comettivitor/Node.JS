const chalk = require('chalk')
const res = require('express/lib/response')
const inquirer = require('inquirer')

inquirer
  .prompt([
    {
      name: 'nome',
      message: 'Qual o seu nome?'
    },
    {
      name: 'idade',
      message: 'Qual a sua idade?'
    }
  ])
  .then(answers => {
    console.log(answers)
    const resposta1 = answers.nome
    const resposta2 = parseInt(answers.idade)
    console.log(
      chalk.bgYellow.black(
        `Seu nome é ${resposta1} e sua idade é ${resposta2} anos`
      )
    )
  })
  .catch(err => console.log(err))
