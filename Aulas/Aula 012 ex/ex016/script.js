function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('iano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente !')
    } else{
        var idade = ano - Number(fano.value)
        var fsex = document.getElementsByName('radsex')
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            gen = 'Homem'
            if(idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', 'Imagens/menino.png')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'Imagens/rapaz.png')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src', 'Imagens/homem.png')
            } else if (idade < 120){
                //idoso
                img.setAttribute('src', 'Imagens/idoso.png')
            } else {
                //morto
                img.setAttribute('src', 'Imagens/velho.png')
            }
        } else {
            gen = 'Mulher'
            if(idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', 'Imagens/menina.png')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'Imagens/moca.png')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src', 'Imagens/mulher.png')
            } else if(idade < 120){
                //idoso
                img.setAttribute('src', 'Imagens/idosa.png')
            } else {
                //morto
                img.setAttribute('src', 'Imagens/velho.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos`
        res.appendChild(img)
    }
}