var numeros = []
var res = document.getElementById('tela')

function limpar(){
    numeros.length = 0
    res.innerHTML = `Esperando por números...`
}

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

function deletar(){
    if(numeros.length == 0){
        limpar()
    } else if (numeros.length > 0){
        numeros.pop()
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