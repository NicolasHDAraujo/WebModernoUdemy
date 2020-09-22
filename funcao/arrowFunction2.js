function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa
//a grande vantagem de se utilizar arrw é que o this é sempre constante apontando sempre pra pessoa
