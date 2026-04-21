let teste = document.querySelector('div#letras')
let txt = document.getElementById('itxt')
let letras = []

function validar(){
    let palavra = String(txt.value)
    letras = palavra.split('')

    for(let pos in letras){
        let caixa = document.createElement('p')
        caixa.setAttribute('id', pos)
        caixa.setAttribute('class', 'caixa')
        let container = document.querySelector('div#letras')
        container.appendChild(caixa)
    }
    txt.value = ``
}

function responder(){
    let c = document.querySelector('input#ires')
    let erros = document.getElementById('erros')
    let chute = String(c.value)
    if(letras.indexOf(chute) != -1){
        let l = document.getElementById(letras.indexOf(chute))
        l.innerHTML = `${letras[letras.indexOf(chute)]}`
    } else{
        erros.innerHTML += `${chute}, `
    }
}