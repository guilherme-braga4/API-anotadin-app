const express = require('express');
const app = express();
const port = 8080

const dotenv = require('dotenv');
//Configurar o uso das variáveis de ambiente na aplicação.
dotenv.config()

//Chamando o DB   
const db = require('./src/database/db')
// const teste = db.

app.get('/login', ((req, res) => {
    res.status(200).send('Hello World')
}))

app.listen(port, (req, res) => {
  console.log("Estou rodando na porta 8080")
})