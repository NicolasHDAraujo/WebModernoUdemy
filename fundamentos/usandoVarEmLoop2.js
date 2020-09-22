const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {//adcionar um novo elemento no array através da função push
        console.log(i)
    })
}

funcs[2]()//qual será o valor de i chamando a funcs 2
funcs[8]()
//a resposta vai ser 10 pra todas as situações por conta do uso do var