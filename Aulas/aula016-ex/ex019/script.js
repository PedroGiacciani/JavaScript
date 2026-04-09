var a = []
var sel = document.getElementById('isel')
var num = document.getElementById('inum')


function inLista(n, l){
    if(l.indexOf(n) != -1){
        return true
    } else{
        return false
    }
}

function isNumber(n){
    if(n.length == 0 || n > 100 || n < 1 ){
        return false
    } else{
        return true
    }
}

function adicionar(){
    if( !isNumber(num.value) || inLista(num.value, a)){
        window.alert(`[ERRO] Número repetido ou fora do intervalo (1-100)`)
    }else{
        var op = document.createElement('option')
        sel.appendChild(op)
        a.push(num.value)
        op.innerHTML = `Valor ${num.value} adicionado`
    }

    num.value = ''
    num.focus()
}

function verificar(){
    if(a.length == 0){
        window.alert("Digite no mínimo um valor")
    }else{
        var res = document.getElementById('res')
        var soma = 0;
        a.sort((a, b) => a - b)
        
        for(var i = 0; i <= a.length - 1; i++){
            soma += Number(a[i])
        }

        res.innerHTML = `Ao todo, temos ${a.length} números cadastrados <br> O maior valor informado foi: ${a[a.length - 1]} <br> O menor valor informado foi ${a[0]} <br> Somando todos os valores, temos: ${soma} <br> A média dos valores digitados é ${soma/a.length}`
    }
}