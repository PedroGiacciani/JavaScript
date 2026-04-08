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

function verificar(){
    var res = document.getElementById('res')
    var soma = 0;
    a.sort()
    
    for(var i = 0; i <= a.length - 1; i++){
        soma = a[i] + a[i + 1]
    }

    res.innerHTML = `Ao todo, temos ${a.length} números cadastrados <br> O maior valor informado foi: ${a[a.length - 1]} <br> O menor valor informado foi ${a[0]} <br> Somando todos os valores, temos: ${soma} <br> A média dos valores digitados é ${soma/a.length}`        
}