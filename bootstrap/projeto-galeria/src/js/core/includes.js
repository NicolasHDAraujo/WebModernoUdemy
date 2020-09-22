import $ from 'jquery' //importando jquery dando nome $

const loadHtmlSuccessCallbacks = []//array para quando for bem sucedido o callback

export function onLoadHtmlSuccess(callback) {
    if(!loadHtmlSuccessCallbacks.includes(callback)) {//se a callback não está no array, inclua no array
        loadHtmlSuccessCallbacks.push(callback)
    }
}

function loadIncludes(parent) {//função que vai ler todos os atributos com wm-include
    if(!parent) parent = 'body'//se parent vier vazio, procura no body inteiro
    $(parent).find('[wm-include]').each(function(i, e) {//procure dentro do parent a propriedade wm-include, index e elemento
        const url = $(e).attr('wm-include')//dentro do wm include vai ter a url
        $.ajax({//
            url,
            success(data) {//pegar elemento atual e setar data dentro de html e depois excluir a propriedade para evitar reprocessamento
                $(e).html(data)
                $(e).removeAttr('wm-include')

                loadHtmlSuccessCallbacks.forEach(//pra cada elemento pegue a callback com data como parametro
                    callback => callback(data))
                loadIncludes(e)//retorna usando o elemento como parent e procurando novos includes até carregar todos de forma recursiva
            }
        })
    })
}

loadIncludes()//pra restartar o processo