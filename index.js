const express = require('express');
const app = express();

const port = 8080

app.get('/login', ((req, res) => {
    res.status(200).send('Hello World')
}))

app.listen(port, (req, res) => {
  console.log("Estou rodando na porta 8080")
})