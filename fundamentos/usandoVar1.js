

{ 
    { 
        { 
            { 
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}

console.log(sera)

//variavel local só é acessada de forma local, evitar criar variaveis de escopo global
function teste() {
    var local = 123
    console.log(local)
}

teste()
//console.log(local)