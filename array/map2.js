/**
 * transformando JSON em Objeto ou Apenas com os preços
 * Json.parse-->transforma as strings em Obj e após isso pega apenas o preço na segunda função
 * na chamada para converter o json armazenar em uma "constante x = arquivoJSON.map(função)"
 */

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)