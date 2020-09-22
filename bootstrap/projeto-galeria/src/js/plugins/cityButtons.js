import $ from 'jquery'

import { onLoadHtmlSuccess } from '../core/includes'//importando a função para verificar se a pagina foi carregada com sucesso

const duration = 300//duração do tempo para filtrar as imagens 

function filterByCity(city) {
    $('[wm-city]').each(function (i, e) {//pra cada wm-city que encontrar retorna indice e elemento
        const isTarget = $(this).attr('wm-city') === city//igual ao parametro ou se é nulo
            || city === null
        if (isTarget) {//se for verdadeiro, aparece a imagem
            $(this).parent().removeClass('d-none')//removendo a classe com display none
            $(this).fadeIn(duration)
        } else {//se falso esconde
            $(this).fadeOut(duration, () => {
                $(this).parent().addClass('d-none')//esconder para reposicionar as divs
            })
        }
    })
}

$.fn.cityButtons = function () {
    const cities = new Set
    $('[wm-city]').each(function (i, e) {
        cities.add($(e).attr('wm-city'))
    })//pegar o valor de cada cidade para colocar dentro do cities

    const btns = Array.from(cities).map(city => {//encima do set transformar em array e fazer um map
        const btn = $('<button>')
            .addClass(['btn', 'btn-info']).html(city)//adcionando botão no html
        btn.click(e => filterByCity(city))//invocando a função de filtrar a cidade
        return btn
    })

    const btnAll = $('<button>')
        .addClass(['btn', 'btn-info', 'active']).html('Todas')//conteudo do botão vai receber todas
    btnAll.click(e => filterByCity(null))//chamando a função e passando nulo, exibindo todas as imagens
    btns.push(btnAll)

    const btnGroup = $('<div>').addClass(['btn-group'])
    btnGroup.append(btns)//criando grupo de botoes e adcionar todos os botoes do array

    $(this).html(btnGroup)
    return this
}

onLoadHtmlSuccess(function() {
    $('[wm-city-buttons]').cityButtons()
})
