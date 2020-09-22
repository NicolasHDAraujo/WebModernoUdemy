const gulp = require('gulp')
const {series, parallel} = require('gulp')
//const series = gulp.series

const antes1 = cb =>{
    console.log('Tarefa antes 1!')
    return cb()
}

const antes2 = cb =>{
    console.log('Tarefa antes 2!')
    return cb()
}

function copiar (cb){
   // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])//quais arquivos vão ser a entrada de dados
    gulp.src('pastaA/**/*.txt')//mesmo procedimento do anterior, vai selecionar qualquer arquivo txt da pastaA    
        .pipe(gulp.dest('pastaB'))//aplicar transformações nos arquivos de entrada
    console.log('Tarefa de copiar')
    return cb()
}

const fim = cb =>{
    console.log('Tarefa antes 1!')
    return cb()
}

module.exports.default = series(
    parallel(antes1,antes2), 
    copiar,
    fim,
)//necessário o default para dar acesso ao arquivo