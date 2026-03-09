function verificar(){
    n = Number(document.getElementById('inum').value)
    var res = document.getElementById('ires')

    if(n != ''){
        res.innerHTML = ``
        for(var m = 0; m <= 10; m++){
            var s = n * m
            res.innerHTML += `${n} X ${m} = ${s} <br>`
        }
    } else{
        alert('[ERRO] Digite um número válido')
    }
}