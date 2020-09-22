// Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// retorno implícito
const subtracao = (a, b) => a - b //quando se tem uma unica sentença de código
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a) //quando se tem um unico parametro pode se utilizar sem parenteses
imprimir2('Legal!!!')