var numeros = []
var res = document.getElementById('tela')

function adicionar(n){
    numeros.push(n)
    res.innerHTML = ``
    for(var pos in numeros){
        res.innerHTML += `${numeros[pos]}`
    }
}

function resultado(){
    var conta = numeros.join('')
    var resultadoFinal = eval(conta)
    res.innerHTML = resultadoFinal
    numeros = [resultadoFinal] 
}

const clear = () => res.innerHTML = ``

/* 
    Funções anônimas e arrow functions:
    Função anônima:
        const nome = function(){}
        const nome = (){}
    Arrow function:
        const nome = () => console.log('pedro')
        nome()
*/