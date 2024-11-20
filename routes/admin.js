const express = require('express');
const path = require('path');

// const rootFile = require('../utils/path');

const routes = express.Router();

routes.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'admin.html'));
});

routes.post('/product', (req, res, next) => {
  const body = { ...req.body };
  console.log(body);
  res.redirect('/shop/');
});

module.exports = routes;
