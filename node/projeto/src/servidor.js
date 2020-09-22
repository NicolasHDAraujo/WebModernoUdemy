/**
 * configurando o express
 * primeiramente preciso declarar porta (porta é um processo dentro do computador)
 */

const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true}))//pra qualquer requisição feita no servidor vai passar pelo middleware e se no corpo da requisição tiver padrao urlencoded, quando chegar vai ser aplicado um parser e transformar em objeto

app.get('/produtos', (req, res, next) =>{
    res.send(bancoDeDados.getProdutos()) //Converter para JSON
})

app.get('/produtos/:id', (req, res, next) =>{
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) =>{
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //gera um Json para a web
})

app.delete('/produtos/:id', (req, res, next) =>{
    const produto = bancoDeDados.excluirProdutos(req.params.id)
    res.send(produto)
})

app.listen(porta, () =>{
    console.log(`Servidor executando na porta... ${porta}!`)
})