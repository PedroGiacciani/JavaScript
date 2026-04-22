let teste = document.querySelector('div#letras')
let txt = document.getElementById('itxt')
let menu = document.getElementById('menu')
let letras = []
let e = []
let erros = document.getElementById('erros')
let correto = []

function validar(){
    menu.innerHTML = ``
    e = []
    erros.innerHTML = ``
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
    let chute = String(c.value)
    if(letras.indexOf(chute) != -1){
        for(let pos in letras){
            if(letras[pos] == chute){
                let l = document.getElementById(pos)
                l.innerHTML = `${letras[pos]}`
                correto.push(chute)
            }
        }
    } else if(letras.indexOf(chute) == -1 && e.indexOf(chute) == -1){
        e.push(chute)
        erros.innerHTML = `${e}`
        if(e.length >= 7){
            window.confirm("Você foi enforcado!!")
        }
    }
    c.value = ``
    c.focus()

    if(correto.length == letras.length){
        correto.sort()
        letras.sort()
        if(toString(correto) == toString(letras)){
            window.confirm("Você acertou a palavra!!")
        }
    }
}

const recomecar = () => window.location.reload()