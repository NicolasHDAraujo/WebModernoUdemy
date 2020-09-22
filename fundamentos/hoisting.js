//hoisting-> pegar a variavel e jogar pra cima, mesmo a atribuição sendo após a chamada da variavel, será issado que ela existe

console.log('a =', a)
var a = 2
console.log('a =', a)

console.log('b =', b)
let b = 2
console.log('b =', b)