/*
**
*/
function Pessoa() {
    this.idade = 0

    const self = this//outra opção é vincular o this a uma variavel e utilizar ela para acessar ao objeto pessoa
    setInterval(function() {//setInterval dispara outra função a partir do intervalo
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)//bind foi utilizado pra vincular o this em pessoa e possibilitar o uso no new Pessoa
}

new Pessoa