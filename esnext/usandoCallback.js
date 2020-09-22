// sem promise...
const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`//interpolar a turma para obter os arquivos
    http.get(url, res => {//função callback para receber a resposta da url com string de dados
        let resultado = ''

        res.on('data', dados => {//evento de resposta que vai concatenar cada resultado na variavel resultado
            resultado += dados
        })

        res.on('end', () => {//quando terminar de chegar os dados vai pegar eles e converter para objeto com Json.parse e retorná-lo ao callback
            callback(JSON.parse(resultado))
        })
    })
}

/**
 * função para capturar os alunos de cada turma e concatenar com MAP para pegar apenas o nome
 */
let nomes = []
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})