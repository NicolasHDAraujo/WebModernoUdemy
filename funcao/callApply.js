/* 
a diferença entre call e apply é a forma como se passa os parametros na hora de invocar
metodo getPreco para associar o obj
*/
function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro))//chamar a função
console.log(getPreco.apply(carro))//a mesma coisa serve para o apply
//call passa diretamente nos parametros cada um que serão passados para a função 
console.log(getPreco.call(carro, 0.17, '$'))
//passar os parametros dentro de um array
console.log(getPreco.apply(global, [0.17, '$']))