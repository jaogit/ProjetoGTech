const mysql = require('mysql2/promise');

// Cria um pool de conexões com suporte a async/await
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'gtech_db' // certifique-se de que este é o nome correto do seu banco
});

module.exports = db;