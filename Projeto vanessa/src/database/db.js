// Conexão com o Banco de Dados (SQLite via better-sqlite3)
const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, 'database.sqlite');
const db = new Database(dbPath);

console.log('📦 Banco de dados conectado em:', dbPath);

module.exports = db;
