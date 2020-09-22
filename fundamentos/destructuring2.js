//desestruturando a partir de array

const [a] = [10]
console.log(a)

//tomarcuidado pra não confundir o array com o distructuring, criando várias variaveis com valores padrão em posições puladas
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

//pegar somente o segundo elemento do segundo array
const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)