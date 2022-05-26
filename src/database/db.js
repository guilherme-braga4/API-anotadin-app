async function connect () {

  const mysql = require('mysql');

  const connection = await mysql.createConnection({
    host     : `${process.env.DB_HOST}`,
    user     : `${process.env.DB_USERNAME}`,
    password : `${process.env.DB_PASSWORD}`,
  });

  console.log("Conectando com o DB")
  global.connection = connection
  return connection
}


// connection.connect((err) => {
//   if (err) {
//       console.log('Erro connecting to database...', err)
//       return
//   }
//   console.log('Connection established!')
// })

// connection.end((err) => {
//   if(err) {
//       console.log('Erro to finish connection...', err)
//       return 
//   }
//   console.log('The connection was finish...')
// })

