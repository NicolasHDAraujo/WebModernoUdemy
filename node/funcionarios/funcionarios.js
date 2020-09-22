const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {//utilizar o axios para pegar dados do url e quando retornar obter os dados do arquivo com a função
    const funcionarios = response.data
    // console.log(funcionarios) //vai mostrar a lista dos funcionarios

    // mulher chinesa com menor salário?
    const func = funcionarios 
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)
})