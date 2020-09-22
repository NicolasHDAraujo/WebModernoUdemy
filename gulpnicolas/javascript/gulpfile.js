const {series, parallel} = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao(cb){
    return gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,//não quer arquivos de comentarios transferidos para arquivo final
            presets: ["env"],//preset mais moderno que existe
        }))
        .pipe(uglify())//pegar todo o codigo e converter para ser minificado
        .on('erro', err=>console.log(err))
        .pipe(concat('codico.min.js'))//pegar os arquivos selecionados e compilados para versões compariveis e concatenar passando o arquivo que queira construir
        .pipe(gulp.dest('build'))

    //return cb()
}

function fim(cb){
    console.log('Fim!!')
    return cb()
}

exports.default = parallel(padrao, fim)