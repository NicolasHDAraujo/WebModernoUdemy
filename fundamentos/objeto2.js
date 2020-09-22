console.log(typeof Object)
console.log(typeof new Object)//estanciando um objeto criado a partir de uma função

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto())//pode estanciar com parenteses ou sem

//a forma de se criar um objeto em js é através de uma função ou classe