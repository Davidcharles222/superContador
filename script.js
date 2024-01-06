function contar(){
    var ini = document.getElementById('inicio')
    var fi = document.getElementById('fim')
    var pas = document.getElementById('passo')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fi.value.length == 0 || pas.value.length == 0){// utilizamos length 'comprimento' para string - antes de converter para number
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = `Impossível contar!`
    } else{
        res.innerHTML = `Contando: <br>`

        var inicio = Number(ini.value) //convertendo para number
        var fim = Number(fi.value) //convertendo para number
        var passo = Number(pas.value) //convertendo para number

        if (passo <= 0){ //se passo for menor ou igual a 0 faça isso abaixo, NUMBER já convertido
            window.alert('Passo inválido! Considerando PASSO 1')
            passo = 1 //var passo passa a se valer 1 quando é menos ou igual a 0
        }

        if (inicio < fim){
            //contagem crescente
            for ( var c = inicio; c <= fim; c += passo){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }else {
            //contagem regressiva
            for ( var c = inicio; c >= fim; c -= passo){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`//está fora do loop, irá aparecer somente quando finalizar todo for
    }
}