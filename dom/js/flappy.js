function novoElemento(tagName, className) {//criando um novo elemento
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

function Barreira(reversa = false) {//criando barreira
    this.elemento = novoElemento('div', 'barreira')//estanciar barreira

    const borda = novoElemento('div', 'borda')//criando as duas partes da barreira
    const corpo = novoElemento('div', 'corpo')
    this.elemento.appendChild(reversa ? corpo : borda)//se for uma barreira reversa aplica corpo, se não borda
    this.elemento.appendChild(reversa ? borda : corpo)//contrario da função anterior

    this.setAltura = altura => corpo.style.height = `${altura}px`//definir altura
}

// const b = new Barreira(true)
// b.setAltura(300)
// document.querySelector('[wm-flappy]').appendChild(b.elemento)

function ParDeBarreiras(altura, abertura, x) {
    this.elemento = novoElemento('div', 'par-de-barreiras')

    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)

    this.elemento.appendChild(this.superior.elemento)//adcionando no DOM através do elemento
    this.elemento.appendChild(this.inferior.elemento)

    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)//calculo aleatorio com random
        const alturaInferior = altura - abertura - alturaSuperior //altura inferior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])//saber em que posição a barreira está 
    this.setX = x => this.elemento.style.left = `${x}px`//saber valor do x(horizontal) para o left em style
    this.getLargura = () => this.elemento.clientWidth//saber a sargura do elemento

    this.sortearAbertura()
    this.setX(x)
}

// const b = new ParDeBarreiras(700, 200, 800)
// document.querySelector('[wm-flappy]').appendChild(b.elemento)

function Barreiras(altura, largura, abertura, espaco, notificarPonto) {
    this.pares = [//criando par de barreiras 
        new ParDeBarreiras(altura, abertura, largura),//criando par de barreiras fora do jogo
        new ParDeBarreiras(altura, abertura, largura + espaco),//criando par de barreiras 
        new ParDeBarreiras(altura, abertura, largura + espaco * 2),//criando par de barreiras 
        new ParDeBarreiras(altura, abertura, largura + espaco * 3)//criando par de barreiras
    ]

    const deslocamento = 3
    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento)//passar por cada pares e fazer deslocar

            // quando o elemento sair da área do jogo
            if (par.getX() < -par.getLargura()) {
                par.setX(par.getX() + espaco * this.pares.length)
                par.sortearAbertura()
            }

            const meio = largura / 2//calcular quando uma barreira cruzou o meio
            const cruzouOMeio = par.getX() + deslocamento >= meio
                && par.getX() < meio
            if(cruzouOMeio) notificarPonto()
        })
    }
}

function Passaro(alturaJogo) {
    let voando = false

    this.elemento = novoElemento('img', 'passaro')//novo elemento
    this.elemento.src = 'imgs/passaro.png'//caminho da imagem

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])//posição onde está voando o passaro
    this.setY = y => this.elemento.style.bottom = `${y}px`//setar altura 

    window.onkeydown = e => voando = true//quando clicar vai setar voando true
    window.onkeyup = e => voando = false//quando soltar vai pra falso

    this.animar = () => {
        const novoY = this.getY() + (voando ? 8 : -5)//se ta voando soma, se não subtrai(o quanto sobe ou o quanto cai)
        const alturaMaxima = alturaJogo - this.elemento.clientHeight//altura maxima que pode percorrer

        if (novoY <= 0) {
            this.setY(0)//limitando altura
        } else if (novoY >= alturaMaxima) {
            this.setY(alturaMaxima)
        } else {
            this.setY(novoY)
        }
    }

    this.setY(alturaJogo / 2)//definir altura de inicio
}



function Progresso() {
    this.elemento = novoElemento('span', 'progresso')
    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos//colocar pontos dentro do elemento
    }
    this.atualizarPontos(0)
}

// const barreiras = new Barreiras(700, 1200, 200, 400)
// const passaro = new Passaro(700)
// const areaDoJogo = document.querySelector('[wm-flappy]')
// areaDoJogo.appendChild(passaro.elemento)
// areaDoJogo.appendChild(new Progresso().elemento)
// barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
// setInterval(() => {
//     barreiras.animar()
//     passaro.animar()
// }, 20)

function estaoSobrepostos(elementoA, elementoB) {
    const a = elementoA.getBoundingClientRect()//retangulo do elemento
    const b = elementoB.getBoundingClientRect()

    const horizontal = a.left + a.width >= b.left
        && b.left + b.width >= a.left
    const vertical = a.top + a.height >= b.top
        && b.top + b.height >= a.top
    return horizontal && vertical
}

function colidiu(passaro, barreiras) {
    let colidiu = false
    barreiras.pares.forEach(parDeBarreiras => {
        if (!colidiu) {
            const superior = parDeBarreiras.superior.elemento
            const inferior = parDeBarreiras.inferior.elemento
            colidiu = estaoSobrepostos(passaro.elemento, superior)
                || estaoSobrepostos(passaro.elemento, inferior)
        }
    })
    return colidiu
}

function FlappyBird() {
    let pontos = 0

    const areaDoJogo = document.querySelector('[wm-flappy]')
    const altura = areaDoJogo.clientHeight//altura da div
    const largura = areaDoJogo.clientWidth//largura da div

    const progresso = new Progresso()
    const barreiras = new Barreiras(altura, largura, 200, 400,
        () => progresso.atualizarPontos(++pontos))
    const passaro = new Passaro(altura)

    areaDoJogo.appendChild(progresso.elemento)
    areaDoJogo.appendChild(passaro.elemento)
    barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))

    this.start = () => {
        // loop do jogo
        const temporizador = setInterval(() => {
            barreiras.animar()
            passaro.animar()

            if (colidiu(passaro, barreiras)) {
                clearInterval(temporizador)
            }
        }, 20)
    }
}

new FlappyBird().start()