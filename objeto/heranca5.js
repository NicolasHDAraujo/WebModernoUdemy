console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

//reverter uma string, split quebra a string em array com todas as letras e espaços em branco, reverse vai interter os elementos do array, join irá juntar todas de volta
String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

//pegar primeiro elemento do array
Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

//cuidado, esse tipo de função sobreescreve o comportamento do prototype
String.prototype.toString = function () {
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())