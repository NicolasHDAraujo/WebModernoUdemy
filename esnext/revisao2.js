// Arrow Function
const soma = (a, b) => a + b
console.log(soma(2, 3))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametro default, caso o valor for undefined a variavel vai assumir o valor padrão
function log(texto = 'Node') {
    console.log(texto)
}

log()
log('Sou mais forte')

// operador rest--->agrupar parametros em array
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))