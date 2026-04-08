// Controller do CRUD de Produtos
const Produto = require('../models/Produto');

module.exports = {
  // Página de Cadastro (formulário)
  telaCadastro: (req, res) => {
    res.render('cadastro', { titulo: 'Cadastro de Produto' });
  },

  // Página de Produtos (listagem)
  listar: (req, res) => {
    const produtos = Produto.listar();
    res.render('produtos', { titulo: 'Produtos Sustentáveis', produtos });
  },

  // CREATE
  criar: (req, res) => {
    Produto.criar(req.body);
    res.redirect('/produtos');
  },

  // Tela de edição
  telaEdicao: (req, res) => {
    const produto = Produto.buscarPorId(req.params.id);
    if (!produto) return res.redirect('/produtos');
    res.render('editar', { titulo: 'Editar Produto', produto });
  },

  // UPDATE
  atualizar: (req, res) => {
    Produto.atualizar(req.params.id, req.body);
    res.redirect('/produtos');
  },

  // DELETE
  deletar: (req, res) => {
    Produto.deletar(req.params.id);
    res.redirect('/produtos');
  }
};
