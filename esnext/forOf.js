/**
 * Intera encima de array, map, set...
 * 
 */

for (let letra of "Cod3r") {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {//percorre encima de indice
    console.log(i)
}

for (let assunto of assuntosEcma) {//percorre encima de valor
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (let assunto of assuntosMap) {//percorre chave e valor
    console.log(assunto)
}

for (let chave of assuntosMap.keys()) {//percorre as chaves
    console.log(chave)
}

for (let valor of assuntosMap.values()) {//percorre os valores
    console.log(valor)
}

for (let [ch, vl] of assuntosMap.entries()) {//desestruturando pegando chave e valor
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}