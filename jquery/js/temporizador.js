(function ($) {
    $.fn.temporizador = function (opcoes) {
        const opcoesFinais = $.extend({//opções com valores por padrão
            mensagem: 'Em breve!',
            horario: '23:59:59'
        }, opcoes)

        const horaDezena = $('<span class="digito">').html('0')//criando os campos da hora
        const horaUnidade = $('<span class="digito">').html('0')
        const minutoDezena = $('<span class="digito">').html('0')
        const minutoUnidade = $('<span class="digito">').html('0')
        const segundoDezena = $('<span class="digito">').html('0')
        const segundoUnidade = $('<span class="digito">').html('0')

        const separadorHora = $('<span class="separador">').html(':')//criando os separadores dos campos
        const separadorMinuto = $('<span class="separador">').html(':')
        const mensagem = $('<div class="mensagem">').html(opcoesFinais.mensagem)//criando o campo do texto

        $(this).addClass('temporizador')
        $(this).append(horaDezena, horaUnidade, separadorHora,//append para incluir na pagina
            minutoDezena, minutoUnidade, separadorMinuto,
            segundoDezena, segundoUnidade, mensagem)

        const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/)//regex para dentro de um grupo de captura pegar os digitos separados por dois pontos
        const horarioAlvo = regex.exec(opcoesFinais.horario)//receber o horario que recebeu como base
        // console.log(horarioAlvo)

        let temporizador = setInterval(() => {
            const agora = new Date()//hora atual
            const alvo = new Date()//hora alvo
            alvo.setHours(horarioAlvo[1])//criando a hora com seus indices
            alvo.setMinutes(horarioAlvo[2])
            alvo.setSeconds(horarioAlvo[3])

            const diferencaEmMili = alvo.getTime() - agora.getTime()
            if (diferencaEmMili >= 0) {
                const diferenca = regex.exec(new Date(diferencaEmMili).toISOString())
                console.log(diferenca)

                horaDezena.html(diferenca[1][0])
                horaUnidade.html(diferenca[1][1])
                minutoDezena.html(diferenca[2][0])
                minutoUnidade.html(diferenca[2][1])
                segundoDezena.html(diferenca[3][0])
                segundoUnidade.html(diferenca[3][1])
            } else {
                clearInterval(temporizador)
            }
        }, 1000)
        
        return this
    }
})(jQuery)