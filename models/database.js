const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'university' //db name here
});

connection.connect((error)=>{
  if(!error) {
    console.log('Connected to DB');
  }
  else {
    console.log('Error connecting to DB');
  }
});

module.exports = connection;
