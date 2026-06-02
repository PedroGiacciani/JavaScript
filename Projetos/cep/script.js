let btnEnviar = document.getElementById('btn-enviar')
let campoRes = document.getElementById('res')
btnEnviar.addEventListener('click', () => {
    let campoCep = document.getElementById('icep')
    let cep = campoCep.value
    campoRes.innerHTML = ``

    fetch(`https://viacep.com.br/ws/${cep}/json`)
        .then(resposta => resposta.json())
        .then(json => {
            campoRes.innerHTML += `<p>${json.logradouro}</p>`
            campoRes.innerHTML += `<p>${json.bairro}</p>`
            campoRes.innerHTML += `<p>${json.localidade}</p>`
            campoRes.innerHTML += `<p>${json.estado}</p>`
        })
        .catch(error => campoRes.innerHTML = `<p>[ERRO]: ${error}</p>`)
    //
    

})