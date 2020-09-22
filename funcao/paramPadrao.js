// estrategia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

// estrategia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1//se a for diferente de indefinido pega o proprio valor de a, se for nulo recebe 1
    b = 1 in arguments ? b : 1 //se dentro de arguments existe o valor do segundo argumento(indice 1) pega o valor de b se não recebe 1
    c = isNaN(c) ? 1 : c// se c  isNaN recebe o valor de 1 se não recebe C
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// valor padrão do es2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))