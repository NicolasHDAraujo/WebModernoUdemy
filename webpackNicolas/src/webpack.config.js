const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCss = require('mini-css-extract-plugin')
const ugliFyJsPlugin = require('uglifyjs-webpack-plugin')
const optimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: modoDev? 'development' : 'production',//ou production // referenciar qual uso do wp
    entry: './src/principal.js',//dados de entrada,
    output: {
        filename: 'principal.js',
        path:__dirname + '/public'
    },
    devServer:{
        contentBase: "./public",
        port: 9000
    },
    optimization:{
        minimizer:[
            new ugliFyJsPlugin({
                cache: true,
                parallel:true
            }),
            new optimizeCSSAssetsPlugin({})
        ]
    },
    
    plugins:[
        new MiniCss({
            filename: "estilo.css",
        })
    ],

    module:{
        rules:[{
            test:/\.s?[ac]css$/,
            use: [
                MiniCss.loader,//mesma funcionalidade do abaixo
                //'style-loader',//Adciona CSS a DOM injetando a tag style
                'css-loader',//interpreta, @import, url()...
                'sass-loader',
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }
}
