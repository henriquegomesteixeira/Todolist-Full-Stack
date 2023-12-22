const app = require('./app');
require('dotenv').config();

// Define a porta do servidor
const PORT = process.env.PORT || 4000;

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}!`);
});