/**
 * outra opção de acessar um caminho da pasta é com o caminho obsoluto, com "copy path", porém não faz sentido
 * é mostrado na aula que é possivel criar modulos dentro do node_modules, criar uma pasta, dentro da pasta criar um arquivo index.js, usar module.exports para referenciar o arquivo que poderá ser acessado
 */

const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./pastaC')//importando a pasta diretamente através do arquivo index da pasta
console.log(c.ola2)

//modulo core, importado diretamente interno do node
//exemplo utilizando uma callback com requisição e resposta
const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')//resposta da requisição
    res.end()//saida
}).listen(8080)//porta de execução ou local de execução 