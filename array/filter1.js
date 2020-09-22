/**
 * Filter serve para filtrar um array
 * Recomendação de documentação para estudo--->developer.mozila.org
 */

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]
//função para captar os elementos do produto e retornando false para receber um array vazio, assim fazendo as operações dentro das outras funções
console.log(produtos.filter(function(p) {
    return false
}))

//essas funções são para operar o filter gerado acima
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil
//impressão do filter com as funções de filtragens
console.log(produtos.filter(caro).filter(fragil))