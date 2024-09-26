const express = require('express')
const app = express() 
const port = 3000 

// Middleware para interpretar JSON no corpo da requisição
app.use(express.json()) 

// lista de produtos e clientes
let produtos = []
let clientes = []

// GET (apresentação da api)
app.get('/', (req, res) => {
    res.send('Bem-vindo à API - Senai Market v1.0')
})

// POST (cadastro de produtos)
app.post('/produtos', (req, res) => {
    const { nome, qtd, valor } = req.body // extraindo os dados da requisição
    const produto = {
        nome,
        qtd,
        valor
    }

    produtos.push({ nome, qtd, valor })
    res.status(201).json({ message: `Produto ${produto.nome} cadastrado com sucesso`})
})

// GET (visualizar produtos)
app.get('/produtos', (req, res) => {
    res.status(200).json({ message: produtos})
})

// POST (cadastro de clientes)
app.post('/clientes', (req, res) => {
    const { nome, login, senha } = req.body // extraindo os dados da requisição
    const cliente = {
        nome,
        login,
        senha
    }

    clientes.push({ nome, login, senha})
    res.status(201).json({ message: `Cliente ${cliente.nome} cadastrado com sucesso`})
})

// GET (visualizar clientes)
app.get('/clientes', (req, res) => {
    res.status(200).json({ message: clientes})
})

// iniciar o servidor e começa a escutar as requisições que são feitas na porta definida
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})