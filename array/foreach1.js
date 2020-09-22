/*
 *forEach-->utilizado para percorrer o array, uma função callback com passagem de elemento e indice, caso queira só o indice é obrigado a colocar o primeiro parametro para acessá-lo
 * Não é obrigado a passar os dois parametros, pode se utilizar uma arrowFunction que recebe um unico parametro
 * um terceiro parametro passado na função callback com foreach é o proprio array completo, podendo se passar ou não para captura
*/

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

//com essa função armazenada em uma variavel pode se passar para uma função arrow e imprimir através do foreach, pode se utilizar nome e indice juntos
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)
