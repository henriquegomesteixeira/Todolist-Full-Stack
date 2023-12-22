const express = require('express');
const router = require('./router');

const app = express();

// Permite que o body da requisição seja convertido para JSON
app.use(express.json());

// Define a rota raiz
app.use(router);

module.exports = app;