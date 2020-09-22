/*
um obj em js tem uma referencia para seu prototipo e é assim que js define herança,
a partir da referencia para prototipo tem para outro obj e esse obj tem atributos e comportamentos que percorre a cadeia de prototipos até encontrar o atributo determinado
a forma de acessar é através de __proto__
*/
const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.prototype)
console.log(ferrari.__proto__)//a partir disso dá pra acessar quem é o super objeto do prototipo(obj pai)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)