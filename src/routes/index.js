const express = require('express');
const routes = express.Router()

const userController = require("../controllers/userController");



routes.get('/', (req, res) => {
  res.render('login') 
})

routes.get('/home', (req, res) => {
  res.render('index')
})

module.exports = routes