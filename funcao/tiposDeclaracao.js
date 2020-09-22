console.log(soma(3, 4))

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

// named function expression, a unica vantagem é a de que quando se for depurar codigo, o nome da const irá aparecer
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))