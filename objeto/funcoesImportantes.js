const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))//chaves do obj
console.log(Object.values(pessoa))//valores do obj
console.log(Object.entries(pessoa))//lista chave e valor(registros)

Object.entries(pessoa).forEach(([chave, valor]) => {//percorrer o array
    console.log(`${chave}: ${valor}`)
})
//definir propriedade(suas caracteristicas)
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,//se é propriedade passivel de ser listada
    writable: false,//se aceita ser modificada
    value: '01/01/2019'//atribuição de valor
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)//pega obj dest, todos os objs posteriores serão concatenados ao obj parametro

Object.freeze(obj)
obj.c = 1234
console.log(obj)