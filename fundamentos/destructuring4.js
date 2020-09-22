
function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]//se o minimo for maior que o maximo, inverta
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)//arredondar pra baixo o valor
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))
//console.log(rand())//vai dar problema