// console.log(global)
/**
 * criando função que possa ser visto por qualquer arquivo do sistema
 */
global.MinhaApp = Object.freeze({
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal'
})