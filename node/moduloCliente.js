/**
 * Modulo importandor dos metodos dos outros modulos, precisa se utilizar o require para acessar os outros arquivos
 * todo arquivo .js é um modulo de node, precisando dele para execultar
 * o que difere são os modulos locais e modulos exportaveis
 */

const moduloA = require('./moduloA')
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)