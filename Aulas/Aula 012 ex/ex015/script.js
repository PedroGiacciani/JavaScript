function carregar(){
    var msg = document.getElementById('msg')
    var olá = document.getElementById('boa')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora < 12){
        img.src = 'imagens/manha.png'
        document.body.style.background = '#fcb4a3';
        olá.innerHTML = 'Bom dia !!'
    } else if(hora < 18){
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#d8cabf'
        olá.innerHTML = 'Boa tarde !!'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#001239'
        olá.innerHTML = 'Boa noite !!'
    }
}