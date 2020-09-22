const anonimo = process.argv.indexOf('-a') !== -1
// console.log(anonimo)

if(anonimo) {
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')//pegar o dado digitado pelo usuário, converter em string e remover o \n no retorno

        process.stdout.write(`Fala ${nome}!!\n`)//stdout saida padrão
        process.exit()
    })
}