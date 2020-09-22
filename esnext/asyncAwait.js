// com promise...
const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

// Recurso do ES8
// Objetivo de simplificar o uso de promises...
let obterAlunos = async () => {
    const ta = await getTurma('A')//atribuir o resultado da requisição a turma A a variavel ta
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta, tb, tc)//retornar um array concatenado de todas as turmas
} // retorna um objeto AsyncFunction

obterAlunos()//obter o resultado através do MAP os nomes dos alunos
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))