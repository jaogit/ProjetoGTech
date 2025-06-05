const express = require('express');
const app = express();
const usersRouter = require('./routes/users');
const port = 5000;

// Rota básica para verificar se o servidor está funcionando
app.get('/', (req, res) => {
  res.send('Backend funcionando aee!');
});

// Rota da API
app.get('/api', (req, res) => {
  res.json({ message: 'Dados da API' });
});

// Middleware para aceitar JSON
app.use(express.json());

// Usar o roteador de usuários
app.use('/users', usersRouter);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});