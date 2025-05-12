const express = require('express');
const app = express();
const port = 5000;

// Rota básica para verificar se o servidor está funcionando
app.get('/', (req, res) => {
  res.send('Backend funcionando aee!');
});

// Rota da API
app.get('/api', (req, res) => {
  res.json({ message: 'Dados da API' });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});