// novo recurso do ES2015
/*
Operador de desestruturação, tirar algo da estrutura
*/
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}
//tirando de dentro da estrutura do objeto nome e idade
const { nome, idade } = pessoa
console.log(nome, idade)

//retirando e atribuindo a variavel
const { nome: n, idade: i } = pessoa
console.log(n, i)

//atribuindo variavel no objeto, bemHumorada com valor pré-definido
const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

//acessando os valores do objeto do endereço
const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

//cuidado ao tentar acessar dados não existentes
const { conta: { ag, num } } = pessoa
console.log(ag, num)