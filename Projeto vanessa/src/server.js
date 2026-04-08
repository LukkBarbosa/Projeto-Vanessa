// ============================================
// Projeto AV1 - Backend Express.js
// Tema: ODS 12 - Consumo e Produção Responsáveis
// ============================================

const express = require('express');
const path = require('path');
const methodOverride = require('method-override');

const db = require('./database/db');              // Conexão com o banco (SQLite)
require('./models/Produto');                       // Cria a tabela (Model)

const indexRoutes = require('./routes/index');
const produtoRoutes = require('./routes/produtos');

const app = express();
const PORT = process.env.PORT || 3000;

// ----- Configurações da View Engine -----
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'views'));

// ----- Middlewares -----
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method')); // permite usar PUT/DELETE em formulários HTML
app.use(express.static(path.join(__dirname, '..', 'public')));

// ----- Rotas -----
app.use('/', indexRoutes);
app.use('/produtos', produtoRoutes);

// ----- 404 -----
app.use((req, res) => {
  res.status(404).render('404', { titulo: 'Página não encontrada' });
});

app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});
