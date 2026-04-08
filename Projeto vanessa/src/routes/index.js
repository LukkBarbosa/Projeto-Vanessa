// Rotas principais: Home e Sobre
const express = require('express');
const router = express.Router();

// Rota Home
router.get('/', (req, res) => {
  res.render('home', { titulo: 'Início - ODS 12' });
});

// Rota Sobre
router.get('/sobre', (req, res) => {
  res.render('sobre', { titulo: 'Sobre o Projeto' });
});

module.exports = router;
