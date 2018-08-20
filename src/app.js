'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//Conecta ao banco
mongoose.connect('mongodb://admin:admin123@ds018248.mlab.com:18248/nodeproject');

//Carrega os Models
const Product= require('./models/product');

//Carrega rotas
const indexRoute= require('./routes/index-route');
const productRoute= require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));




app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;