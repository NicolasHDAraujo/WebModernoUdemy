const fs = require('fs')//file system, assistente para leitura de arquivos json
//__dirname é uma constante que está presente em todos os arquivos e modulos do node e representa o diretorio atual
const caminho = __dirname + '/arquivo.json'//arquivo da leitura

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')//leia um arquivo de forma sincrona readFileSync, variavel do caminha e o encode utilizado
console.log(conteudo)

// assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//leitura do arquivo com require convertendo pra objeto
const config = require('./arquivo.json')
console.log(config.db)

//leitura do diretorio 
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})