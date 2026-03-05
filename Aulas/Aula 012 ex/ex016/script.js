function verificar(){
    var data = new Date()
    var ano = data.getFullYear()    
    var fano = document.getElementById('ianos')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente !')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'Imagens/menino.png')
            } else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'Imagens/rapaz.png')
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'Imagens/homem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'Imagens/idoso.png')
            }

        } else {
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'Imagens/menina.png')
            } else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'Imagens/moca.png')
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'Imagens/mulher.png')
            } else {
                //Idoso
                img.setAttribute('src', 'Imagens/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}