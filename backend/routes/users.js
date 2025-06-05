const express = require('express');
const router = express.Router();
const db = require('../db'); // importa a conexão com MySQL

router.post('/', async (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }

  try {
    const [result] = await db.execute(
      'INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)',
      [nome, email, senha]
    );
    res.status(201).json({ message: 'Usuário criado com sucesso!', id: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao cadastrar usuário.' });
  }
});

// Atualizar usuário existente
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }

  try {
    const [result] = await db.execute(
      'UPDATE users SET nome = ?, email = ?, senha = ? WHERE id = ?',
      [nome, email, senha, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    res.json({ message: 'Usuário atualizado com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar usuário.' });
  }
});

// Excluir usuário existente
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await db.execute(
      'DELETE FROM users WHERE id = ?',
      [id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    res.json({ message: 'Usuário excluído com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao excluir usuário.' });
  }
});

module.exports = router;