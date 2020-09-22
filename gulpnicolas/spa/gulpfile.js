const {series, parallel} = require('gulp')
const gulp = require('gulp')

const {appHtml,appCss,appJS,appIMG} = require('./gulpTasks/app')
const { depsCss, depsFonts} = require('./gulpTasks/deps')
const { servidor, monitorarArquivos} = require('./gulpTasks/servidor')

module.exports.default = series(
    parallel(
        series(appHtml, appCss, appJS, appIMG),
        series(depsCss, depsFonts)
    ),
    servidor,
    monitorarArquivos
)