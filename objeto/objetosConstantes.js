// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' } //gera erro, não pode atribuir outro obj a constante

Object.freeze(pessoa)//congelando o obj pessoa, não dá mais pra mexer no obj

pessoa.nome = 'Maria'//com freeze a atribuição é ignorada 
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Joao' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)