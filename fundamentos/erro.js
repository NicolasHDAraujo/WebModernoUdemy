function tratarErroELancar(erro) {
    // throw new Error('...') //primeira opção pode colocar mensagem ou algum tipo de tratamento
    // throw 10 //pode jogar um valor tbem
    // throw true //pode lançar boolean
    // throw 'mensagem' //pode jogar string
    throw {//lançar objeto 
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {//try é um bloco de codigo que dentro dele tem um codigo que pode gerar algum tipo de erro
        console.log(obj.name.toUpperCase() + '!!!')//converter todas as letras para maiusculo e concatenar com !
    } catch (e) {//dentro do try utilizar o catch para caso aconteça algum erro caia dentro dele e tratar o erro
        tratarErroELancar(e)
    } finally {//finally vai ser execcultado com erro ou não
        console.log('final')
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)