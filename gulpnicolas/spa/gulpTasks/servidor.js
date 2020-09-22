//servidor para ajudar o fluxo de desenvolvimento
const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

function servidor(){
    return gulp.src('build')
    .pipe(webserver({
        port: 8080,
        open:true,
        livereload:true,
    }))
    
}

function monitorarArquivos(){
    watch('src/**/*.html', () => gulp.series('appHtml')())//sempre que tiver uma alteração no arquivo ele vai chamar a função para atualizar 
    watch('src/**/*.scss', () => gulp.series('appCss')())
    watch('src/**/*.js', () => gulp.series('appJS')())
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')())
    return     
}

module.exports = {
    monitorarArquivos,
    servidor
}