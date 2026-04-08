// Model da tabela Produto
// Campos exigidos pelo enunciado: nome, valor, descrição,
// fornecedor, email e telefone do fornecedor.
const db = require('../database/db');

db.prepare(`
  CREATE TABLE IF NOT EXISTS produtos (
    id             INTEGER PRIMARY KEY AUTOINCREMENT,
    nome           TEXT    NOT NULL,
    valor          REAL    NOT NULL,
    descricao      TEXT    NOT NULL,
    fornecedor     TEXT    NOT NULL,
    email          TEXT    NOT NULL,
    telefone       TEXT    NOT NULL,
    criado_em      DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`).run();

const Produto = {
  // CREATE
  criar: (dados) => {
    const stmt = db.prepare(`
      INSERT INTO produtos (nome, valor, descricao, fornecedor, email, telefone)
      VALUES (?, ?, ?, ?, ?, ?)
    `);
    return stmt.run(
      dados.nome,
      dados.valor,
      dados.descricao,
      dados.fornecedor,
      dados.email,
      dados.telefone
    );
  },

  // READ (todos)
  listar: () => {
    return db.prepare('SELECT * FROM produtos ORDER BY id DESC').all();
  },

  // READ (por id)
  buscarPorId: (id) => {
    return db.prepare('SELECT * FROM produtos WHERE id = ?').get(id);
  },

  // UPDATE
  atualizar: (id, dados) => {
    const stmt = db.prepare(`
      UPDATE produtos
      SET nome = ?, valor = ?, descricao = ?, fornecedor = ?, email = ?, telefone = ?
      WHERE id = ?
    `);
    return stmt.run(
      dados.nome,
      dados.valor,
      dados.descricao,
      dados.fornecedor,
      dados.email,
      dados.telefone,
      id
    );
  },

  // DELETE
  deletar: (id) => {
    return db.prepare('DELETE FROM produtos WHERE id = ?').run(id);
  }
};

module.exports = Produto;
