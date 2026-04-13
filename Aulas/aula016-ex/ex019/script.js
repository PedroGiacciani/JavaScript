let a = []
let num = document.getElementById('inum')
let sel = document.getElementById('isel')
let res = document.getElementById('res')

function isNumero(n){
    if(n < 1 || n > 100 || n.length == 0){
        return false
    } else {
        return true
    }
}

function inLista(l, n){
    if(l.indexOf(Number(n)) == -1){
        return false
    } else{
        return true
    }
}

function adicionar(){
    if( !isNumero(num.value) || inLista(a, num.value)){
        window.alert("[ERRO] Número repetido ou fora fora do intervalo (1 - 100)")
    } else{
        res.innerHTML = ``
        a.push(Number(num.value))
        let op = document.createElement('option')
        sel.appendChild(op)
        op.innerHTML = `Valor ${num.value} adicionado`
    }

    num.value = ``
    num.focus()
}