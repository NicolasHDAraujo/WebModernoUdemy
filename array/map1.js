/**
 * Map--->Map serve para transformar um array em outro, mapear os elementos de um para o outro, a regra é que os dois arrays irão ter o mesmo tamanho
 * Map é um FOR com propósito, gerando um novo array
 * 
 */

const nums = [1, 2, 3, 4, 5]

// For com propósito, a função pode receber 3 parametros, elemento atual, posição e o array
let resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`//pegar o elemento e retornar uma template string que retorna real, fixando em 2 casas decimais e substituir ponto por virgula.

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)