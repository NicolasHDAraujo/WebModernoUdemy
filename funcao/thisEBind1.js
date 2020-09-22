/*
    
*/

const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)//acessando o atributo de um objeto
    }
}

pessoa.falar()//this permite o acesso fora
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

//bind passa o objeto no qual vai ser resolvido o this, ideal para armazenar em variavel
const falarDePessoa = pessoa.falar.bind(pessoa)//bind garante que sempre o this vai ser apontado para o componente da função
falarDePessoa()