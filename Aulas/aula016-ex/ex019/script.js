var a = []
var sel = document.getElementById('isel')

function adicionar(){
    var num = Number(document.getElementById('inum').value)

    if(num.length == 0 || num > 100 || num < 1){
        window.alert(`[ERRO] Número inválido ou fora do intervalo (1-100)`)
        return
    }

    var op = document.createElement('option')
    sel.appendChild(op)
    a.push(num)
    op.innerHTML = `Valor ${num}`
}   