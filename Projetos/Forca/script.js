//Declaração de variáveis
let txt = document.getElementById('itxt')
let menu = document.getElementById('menu')
let letras = [] //Armazenar letras 
let e = [] //Armazenar erros
let erros = document.getElementById('erros')
let correto = [] //Armazenar letras acertadas

//Adicionar palavra e começar jogo
function validar(){
    //Limpar menu e erros
    menu.innerHTML = ``
    e = []
    erros.innerHTML = ``
    //Separar palavra em letras
    let palavra = String(txt.value)
    letras = palavra.split('')

    //Criar cada letra na forca
    for(let pos in letras){
        let caixa = document.createElement('p')
        caixa.setAttribute('id', pos)
        caixa.setAttribute('class', 'caixa')
        let container = document.querySelector('div#letras')
        container.appendChild(caixa)
    }
}

//Função de chutar letra
function responder(){
    //Armazenar a letra chutada
    let c = document.querySelector('input#ires')
    let chute = String(c.value)
    //Verificar se a letra pertence ao array (palavra)
    if(letras.indexOf(chute) != -1){
        for(let pos in letras){ //Mostrar letra acertada e armazena-la na array correto
            if(letras[pos] == chute){
                let l = document.getElementById(pos)
                l.innerHTML = `${letras[pos]}`
                correto.push(chute)
            }
        }
    } else if(letras.indexOf(chute) == -1 && e.indexOf(chute) == -1){ //Mostrar letra errada e armazena-la no array e
        e.push(chute)
        erros.innerHTML = `${e}`
        if(e.length >= 7){ //Verificar se o jogador perdeu o game
            window.confirm("Você foi enforcado!!")
            recomecar()
        }
    }
    //Voltar o foco ao input
    c.value = ``
    c.focus()

    //Verificar se o jogador venceu o game
    if(correto.length == letras.length){
        correto.sort()
        letras.sort()
        if(toString(correto) == toString(letras)){
            window.confirm("Você acertou a palavra!!")
        }
    }
}

const recomecar = () => window.location.reload() //Recarregar página