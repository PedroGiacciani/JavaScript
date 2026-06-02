//Manipular JSON

const perfil = {
    nome: 'pedro',
    email: 'pedro@gmail.com',
    id: 1
}

//Converter object em texto JSON
let perfilTexto = JSON.stringify(perfil)
console.log(perfilTexto)

//Converter texto JSON em object
let perfilLista = JSON.parse(perfilTexto)
console.log(perfilLista)