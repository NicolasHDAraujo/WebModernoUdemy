const{ series } = require('gulp')
const gulp = require ('gulp')
const ts = require ('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')//arquivo de configuração que o compilador vai usar

function transformacaoTS(){
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest('build'))

}

exports.default = series(transformacaoTS)