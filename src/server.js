const express = require('express');
const app = express();
const path = require("path")

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.render('index') 
})

app.listen(3000, () => {
  console.log("Server is running on port 3000")
  console.log("Access in: http://localhost:3000/")
})