function contar(){
    //Variavéis necessárias
    var c = Number(document.getElementById('ipri').value)
    var f = Number(document.getElementById('ifim').value)
    var p = Number(document.getElementById('ipas').value)

    //Verificar se os dados são suficientes
    if(c == '' || f == ''){ 
        res.innerHTML = 'Impossível contar !'
        alert("[ERRO] faltam dados")
    } else{
        res.innerHTML = `Contando: <br>`
        if(p == 0 || p == ''){
            res.innerHTML = `Passo inválido! Considerando PASSO 1 <br>`
            p = 1
        }
        if(c > f){
            for(c; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        } else{
            for(c; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += '\u{1F3C1}'
    }
}