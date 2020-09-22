console.log(Math.ceil(6.1))//operar um arrendondamento, ceil é teto, floor é pra baixo

const obj1 = {}
obj1.nome = 'Bola'//criando dinamicamente atributos em um objeto
// obj1['nome'] = 'Bola2'     //alternativa
console.log(obj1.nome)

function Obj(nome) {//this utilizado para associar uma atribuição a função, nome ficará publico para quem quiser acessar
    this.nome = nome
    this.exec = function() {//pode tambem criar funções
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()