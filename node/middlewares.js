// middleware pattern (chain of responsibility)
const passo1 = (ctx, next) => {//primeiro passo do processo middleware, foi passado um obj contexto que receberá os dados necessários
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => {//recebe contexto e um conjunto de funções 
    const execPasso = indice => {//execultar utilizando o indice de cada middleware do array
        middlewares && indice < middlewares.length && //se array for true e indice for menor que o compremento do array
            middlewares[indice](ctx, () => execPasso(indice + 1))//verificação para callback até chegar ao compremento do array
    }
    execPasso(0)//execultando
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)