//arquivos da aplicação
const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')

function appHtml(){
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))//tirar espaços em branco
        .pipe(gulp.dest('build'))
}

function appCss(){
    return gulp.src('src/assets/sass/index.scss')
        .pipe(sass().on('erro', sass.logError))
        .pipe(uglifycss({"UglyComments": true}))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('build/assets/css'))
    
}

function appJS(){
    return gulp.src('src/assets/js/**/*.js')
        .pipe(babel({presets: ['ENV']}))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/assets/js'))
}

function appIMG(){
    return gulp.src('src/assets/imgs/**/*.*')
    .pipe(gulp.dest('build/assets/imgs'))
            
}
//nomeando as tasks para ter acesso no watch do servidor
gulp.task('appHTML', appHtml)
gulp.task('appCss', appCss)
gulp.task('appJS', appJS)
gulp.task('appIMG', appIMG)

module.exports ={
    appHtml,
    appCss,
    appJS,
    appIMG
}