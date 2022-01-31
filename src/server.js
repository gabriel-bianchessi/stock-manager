const express = require('express');
const app = express();
const path = require("path");
const routes = require('./routes/index');

// setting the view engine
app.set("view engine", "ejs");

// setting views directory
app.set("views", path.join(__dirname, 'views'));

// serve the static files 
app.use(express.static(path.join(__dirname, 'public')));

// Parsing income data
app.use(express.urlencoded({extended: true}));
app.use(express.json())

// setting routes
app.use(routes);

app.listen(3000, () => {
  console.log("Server is running on port 3000")
  console.log("Access in: http://localhost:3000/")
})