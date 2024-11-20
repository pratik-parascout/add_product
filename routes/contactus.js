const express = require('express');
const path = require('path');

const contactController = require('../controllers/contact');

const routes = express.Router();

routes.get('/', contactController.getContact);

module.exports = routes;
