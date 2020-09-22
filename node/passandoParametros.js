//função exportada que recebe uma função com quantos argumentos nomes quiser 
module.exports = function(...nomes) {
    return nomes.map(nome => `Boa semana ${nome}!`)
}