const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.json({ message: 'Hello Cypress Discovery!' })
})

app.get('/avengers', function (req, res) {
  var avengers = ['Tony Stark', 'Clint Barton', 'Nartasha Romanoff', 'Steve Rogers', 'Bruce Banner']
  return res.json({ data: avengers })
})

app.get('/cnh', function (req, res) {
  const idade = req.query.idade

  if (!idade) {
    return res.json({ message: 'Idade e um campo obrigatorio' })
  }

  var idadeNum = parseInt(idade)

  if (idadeNum >= 18) {
    return res.json({ message: 'Ok! Voce pode tirar sua CNH' })
  } else if (idadeNum > 4) {
    return res.json({ message: 'Voce e menor de idade, sugiro andar de bicicleta' })
  } else {
    return res.json({ message: 'Melhor voce tomar leite' })
  }

  return res.json({ test: idade })
})

app.listen(3000)