let btnEnvio = document.getElementById('btn-enviar')

btnEnvio.addEventListener('click', () => {
    let pokeName = document.getElementById('inome-pokemon')
    let campoRes = document.getElementById('card')
    campoRes.style.display = 'block'

    if(pokeName.value.length == 0){
        campoRes.innerHTML = `<p>[ERRO]: Campo vazio, digite um nome para procurar</p>`
    }else{
        campoRes.innerHTML = `Carregando...`
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName.value}`)
        .then(response => {
            if(!response.ok){
                throw new Error(`Pokémom não encontrado, corrija a ortografia e lembre-se de digitar o nome em inglês!`)
            }

            return response.json()
        })
        .then(pokemon => {
            console.log(pokemon)
            campoRes.innerHTML = ``
            campoRes.innerHTML += `<p><b>${pokemon.name}</b></p>`
            campoRes.innerHTML += `<div id="imagem"><img src="${pokemon.sprites.front_default}" alt="imagem do ${pokemon.name}"></div>`
            //campoRes.innerHTML += `<p><b>Id do pokémon:</b> ${pokemon.id}</p>`
            campoRes.innerHTML += `<p><b>Peso do pokémon:</b> ${pokemon.weight}</p>`
            campoRes.innerHTML += `<p><b>Altura do pokémon:</b> ${pokemon.height}</p>`
            campoRes.innerHTML += `<p><b>Tipos do pokémon:</b> ${pokemon.types.map(pos => pos.type.name).join(" - ")}</p>`
            campoRes.innerHTML += `<p><b>Status do pokémon:</b></p><br><div id="status">${pokemon.stats.map(pos => `<p><b>${pos.stat.name}</b>: ${pos.base_stat}</p>`).join('')}</div>`
        })
        .catch(error => {
            campoRes.innerHTML = `<p>[ERRO]: ${error}</p>`
        })
    }

    pokeName.focus()
})  