// IIFE -> Immediately Invoked Function Expression
//Expressão de função imediatamente invocada
//tudo que definir vai estar dentro da função
//precisa involver a função anonima com parenteses
//estrategia para deixar as variaveis e conteudos restritos a função
//fugir do escopo global
(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()