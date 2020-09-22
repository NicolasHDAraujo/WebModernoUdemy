//mesmo exemplo utilizado em herança2.js
class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)//chamando constructor da classe super
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')//passando valor para constructor do super
    }
}

const filho = new Filho
console.log(filho)