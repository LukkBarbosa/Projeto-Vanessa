# Projeto AV1 — Backend com Express.js

**Tema:** ODS 12 — Consumo e Produção Responsáveis (Objetivos de Desenvolvimento Sustentável da ONU).

Aplicação backend desenvolvida em **Node.js + Express.js**, com CRUD completo de produtos sustentáveis e seus fornecedores, conexão com banco de dados **SQLite** e renderização de páginas via **EJS**.

---

## 1. Objetivo

Atender aos requisitos da 1ª Avaliação (AV1) do semestre:

- Aplicação backend com CRUD.
- Conexão com servidor / banco de dados.
- Model da tabela criada adequadamente.
- Rotas para 4 páginas: **Home, Sobre, Cadastro e Produtos**.
- Formulário com botões de **Enviar** e **Apagar**.
- Documentação da aplicação.
- Trello com atividades de cada membro .

---

## 2. Tecnologias

| Ferramenta        | Função                        |
|-------------------|-------------------------------|
| Node.js           | Runtime JavaScript            |
| Express.js        | Framework web/backend         |
| EJS               | Template engine (views)       |
| better-sqlite3    | Banco de dados SQLite         |
| method-override   | Uso de PUT/DELETE em forms    |

---

## 3. Como executar

```bash
# 1. Instalar dependências
npm install

# 2. Rodar o servidor
npm start

# 3. Acessar no navegador
http://localhost:3000
```

O banco `database.sqlite` é criado automaticamente na primeira execução, dentro de `src/database/`.

---

## 4. Estrutura de Pastas

```
projeto-av1-ods/
├── package.json
├── README.md
├── public/
│   └── css/style.css
├── src/
│   ├── server.js              # Configuração do Express
│   ├── database/
│   │   └── db.js              # Conexão com o banco
│   ├── models/
│   │   └── Produto.js         # Model da tabela produtos
│   ├── controllers/
│   │   └── produtoController.js
│   └── routes/
│       ├── index.js           # Rotas Home e Sobre
│       └── produtos.js        # Rotas do CRUD
└── views/
    ├── partials/ (header, footer)
    ├── home.ejs
    ├── sobre.ejs
    ├── cadastro.ejs
    ├── produtos.ejs
    ├── editar.ejs
    └── 404.ejs
```

---

## 5. Rotas da Aplicação

| Método | Rota                      | Descrição                          |
|--------|---------------------------|------------------------------------|
| GET    | `/`                       | Página **Home**                    |
| GET    | `/sobre`                  | Página **Sobre**                   |
| GET    | `/produtos/cadastro`      | Página de **Cadastro** (formulário)|
| GET    | `/produtos`               | Página de **Produtos** (listagem)  |
| POST   | `/produtos`               | Cria um novo produto (CREATE)      |
| GET    | `/produtos/:id/editar`    | Formulário de edição               |
| PUT    | `/produtos/:id`           | Atualiza um produto (UPDATE)       |
| DELETE | `/produtos/:id`           | Apaga um produto (DELETE)          |

---

## 6. Model — Tabela `produtos`

Conforme exigência do enunciado, o formulário e a tabela possuem os campos:

| Campo        | Tipo      | Obrigatório |
|--------------|-----------|-------------|
| id           | INTEGER PK autoincrement | — |
| nome         | TEXT      | sim         |
| valor        | REAL      | sim         |
| descricao    | TEXT      | sim         |
| fornecedor   | TEXT      | sim         |
| email        | TEXT      | sim         |
| telefone     | TEXT      | sim         |
| criado_em    | DATETIME (default: now) | — |

---

## 7. Funcionalidades do CRUD

- **Create:** botão **Enviar** na tela de Cadastro.
- **Read:** listagem em tabela na página de Produtos.
- **Update:** tela de edição acessível pelo botão **Editar** de cada linha.
- **Delete:** botão **Apagar** em cada linha da tabela e também na tela de edição, com confirmação.

---

## 8. Equipe

| Nome            | Função                         |
|-----------------|--------------------------------|
| Everton Rodrigues Laurindo da Silva 01815700    | rotas                          |
| Kaio Henrique do Nascimento souza 01807905      | Model e banco de dados         |
| Anderson Amós da Silva 01814150                 | Views / EJS                    |
| João Victor dos Santos Saraiva 01816062         | CSS / front                    |
| Pedro Saulo Souza Bandeira Da Cruz 01806043     | Documentação                   |
| Lucas Barbosa Almeida 01803535                  | Trello                         |
| Lucas Vinicius Nogueira da Silva - 01802044     | Back-End                       |


---

## 9. Trello

Quadro com as atividades de cada membro:
https://trello.com/invite/b/69d6cc28d62ff2b15548ef6b/ATTI9796f3ec8f6b85218391a4fd3e1cb0a1B6107B5E/projeto-av1-ods-12

---

## 10. Referência ao ODS

> Os Objetivos de Desenvolvimento Sustentável (ODS) são 17 metas globais
> estabelecidas pela ONU em 2015. Este projeto contribui para o **ODS 12
> — Consumo e Produção Responsáveis**, incentivando o cadastro e a
> divulgação de produtos sustentáveis e seus fornecedores.
