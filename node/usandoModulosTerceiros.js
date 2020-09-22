/**
 *biblioteca para instalar na pasta, npm i lodash
 biblioteca instalada em modo global, nodemon---> npm i -g nodemon
*nodemon é utilizado no terminal e serve para ter o arquivo sendo execultado simultaneamente, referenciar: nodemon nomedoarquivo.js

 *gitignore--> serve para o github ignorar pastas referenciadas dentro do arquivo
 */

//normalmente é referenciado a biblioteca lodash com "_"
const _ = require('lodash')
setInterval(() => console.log(_.random(50, 60)), 2000)