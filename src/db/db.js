const mysql = require('mysql');
require('dotenv').config()

const connection = mysql.createConnection({
  host: process.env.DATABASE_URL,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE_NAME
})