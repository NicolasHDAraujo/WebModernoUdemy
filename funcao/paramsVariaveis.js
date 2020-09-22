function soma() {
    let soma = 0
    for (i in arguments) {//arguments é um array interno de uma funçao que tem todos os argumentos(parametros) passados para a funçao, para acessar os elementos que foram passados para a funçao
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))

console.log(soma(1.1, 2.2, "Teste"))
console.log(soma('a', 'b', 'c'))