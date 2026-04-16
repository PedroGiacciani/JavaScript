var numeros = []
var res = document.getElementById('tela')

function adicionar(n){
    numeros.push(n[6])
    res.innerHTML = ``
    for(var pos in numeros){
        res.innerHTML += `${numeros[pos]}`
    }
}

function resultado(){
    var op = 0
    var soma = numeros.indexOf('+')
    if(soma != -1){
        op += numeros[soma - 1] + numeros[soma + 1]
        res.innerHTML = op
    }
}

/* 
    Funções anônimas e arrow functions:
    Função anônima:
        const nome = function(){}
        const nome = (){}
    Arrow function:
        const nome = () => console.log('pedro')
        nome()
*/