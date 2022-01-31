const express = require('express');
const routes = express.Router()

routes.get('/', (req, res) => {
  res.render('login') 
})

routes.get('/home', (req, res) => {
  res.render('index')
})

module.exports = routes