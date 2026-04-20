//Declaração de variáveis
let numeros = []
let tela = document.getElementById('tela')

function adicionar(n){
    tela.innerHTML = ``
    numeros.push(n)
    for(let pos in numeros){
        tela.innerHTML += `${numeros[pos]}`
    }
}

function resultado(){
    let posSoma = numeros.indexOf('+')
    let posSub = numeros.indexOf('-')
    let posMult = numeros.indexOf('*')
    let posDiv = numeros.indexOf('/')
    if(numeros.length == 0){
        alert("Digite pelo menos um número")
    } else if(posSoma - 1 == posSub || posSoma + 1 == posSub || posSoma - 1 == posMult || posSoma + 1 == posMult || posSoma - 1 == posDiv || posSoma + 1 == posDiv){
        alert("Verifique a sintaxe da operação")
    }else{
        let conta = numeros.join('')
        let result = eval(conta)
        numeros = [result]
        tela.innerHTML = numeros
    }
}

function limpar(){
    numeros = []
    tela.innerHTML = `Esperando por números...`
}

function deletar(){
    numeros.pop()
    if(numeros.length == 0){
        limpar()
    }
    for(let pos in numeros){
        let conta = numeros.join('')
        tela.innerHTML = conta
    }
}