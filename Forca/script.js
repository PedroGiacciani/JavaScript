let teste = document.querySelector('div#letras')
let txt = document.getElementById('itxt')

function validar(){
    let palavra = String(txt.value)
    let letras = palavra.split('')
    
    for(let pos in letras){
        let caixa = document.createElement('p')
        caixa.setAttribute('class', 'caixa')
        let container = document.querySelector('div#letras')
        container.appendChild(caixa)
    }
    txt.value = ``
}