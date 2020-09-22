const funcs = []
//possui o mesmo exemplo em var
for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()//irá ser respeitado os valores de i em cada posição do array 
funcs[6]()
funcs[8]()