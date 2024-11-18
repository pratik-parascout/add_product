const express = require('express');

const routes = express.Router();

routes.get('/add-product', (req, res, next) => {
  res.send(
    '<form action="/admin/product" method="POST"><input type="text" name="title"> <br><input type="number" name="size"><button type="submit">Add</button></form>'
  );
});

routes.post('/product', (req, res, next) => {
  const body = { ...req.body };
  console.log(body);
  res.redirect('/shop/');
});

module.exports = routes;
