// Rotas de Produtos (CRUD) + Cadastro
const express = require('express');
const router = express.Router();
const controller = require('../controllers/produtoController');

// GET  /produtos          -> lista (READ)
router.get('/', controller.listar);

// GET  /produtos/cadastro -> formulário de cadastro
router.get('/cadastro', controller.telaCadastro);

// POST /produtos          -> cria (CREATE)
router.post('/', controller.criar);

// GET  /produtos/:id/editar -> formulário de edição
router.get('/:id/editar', controller.telaEdicao);

// PUT  /produtos/:id      -> atualiza (UPDATE)
router.put('/:id', controller.atualizar);

// DELETE /produtos/:id    -> apaga (DELETE)
router.delete('/:id', controller.deletar);

module.exports = router;
