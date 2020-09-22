// com promise...
const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {//função callback com dois parametros padrão do Resolve
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                try {//se parse der certo retorna resolve
                    resolve(JSON.parse(resultado))
                } catch(e) {//se não retorna o erro
                    reject(e)
                }
            })
        })
    })
}

//------PRIMEIRA RESOLUÇÃO COM PROMISES
// let nomes = []
// getTurma('A').then(alunos => {
//     nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
//     getTurma('B').then(alunos => {
//         nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
//         getTurma('C').then(alunos => {
//             nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
//             console.log(nomes)
//         })
//     })
// })

//-------SEGUNDA RESOLUÇÃO COM PROMISES
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])//receber os resultados em array
    .then(turmas => [].concat(...turmas))//receber as turmas em matriz e espalhar no metodo concat em um unico array
    .then(alunos => alunos.map(aluno => aluno.nome))//encima do map vai mapear o nome do aluno
    .then(nomes => console.log(nomes))//imprimir os nomes
    .catch(e => console.log(e.message))//tratando o erro para não deixar vazio

getTurma('D').catch(e => console.log(e.message))//testando o erro