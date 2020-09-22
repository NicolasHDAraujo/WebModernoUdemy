const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj))//convertendo obj em JSON

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))formato invalido
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))formato invalido
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))//objeto gerado através do JSON, tem que colocar todos os atributos delimitados por aspas duplas
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))

//Site JSON5.org ->documentação não oficial
//Site JSONlint.com ->formatar e validar JSON

//JSON é meramente textual, utilizado para compartilhamento de dados não podendo ter funções dentro 