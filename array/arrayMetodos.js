/**
 * pop----->remove o ultimo elemento do array
 * push---->adciona novo elemento na ultima posição do array
 * shift--->remove o primeiro elemento da lista
 * unshift->adciona um elemento na primeira posição do array
 * splice-->pode adicionar e remover elementos, passar indice, elemento a remover, e o elemento adicionado...ex.:(2,0, 'Botas')
 * slice--->pegar um pedaço do array, passando o elemento de inicio e opcional de colocar o final...ex.:(2) ou(2,4)
 */
const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa quebrou o carro!
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro!
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)


// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)