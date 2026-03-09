function contar(){
    var c = Number(document.getElementById('ipri').value)
    var f = Number(document.getElementById('ifim').value)
    var p = Number(document.getElementById('ipas').value)
    var res = document.getElementById('res')

    if(c == '' || f == ''){
        res.innerHTML = `Operação cancelada`
    } else if(p == 0 || p == ''){
        alert('Passo inválido. Passo será considerado 1')
        p = 1
        res.innerHTML = ``
        for(c; c <= f; c += p){
            res.innerHTML += `--> ${c}`
        }
    } else{
        res.innerHTML = ``
        for(c; c <= f; c += p){
            res.innerHTML += `--> ${c}`
        }
        res.innerHTML += ' emoji'
    }
}