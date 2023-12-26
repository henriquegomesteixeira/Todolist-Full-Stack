const express = require('express');
const cors = require('cors');
const router = require('./router');

const app = express();

// Permite que o body da requisição seja convertido para JSON
app.use(express.json());

// Permite que o backend seja acessado por qualquer aplicação
app.use(cors());

// Define a rota raiz
app.use(router);

module.exports = app;