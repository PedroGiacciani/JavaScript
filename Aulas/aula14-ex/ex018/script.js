function verificar(){
    n = Number(document.getElementById('inum').value)
    var res = document.getElementById('seltab')

    if(n != ''){
        res.innerHTML = ``
        for(var m = 0; m <= 10; m++){
            var s = n * m
            var item = document.createElement('option')
            item.text = `${n} X ${m} = ${s}`
            item.value = `tab${m}` 
            res.appendChild(item)
        }
    } else{
        alert('[ERRO] Digite um número válido')
    }
}