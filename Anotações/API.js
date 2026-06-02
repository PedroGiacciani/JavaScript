const cep = '15601214'
const url = `https://viacep.com.br/ws/${cep}/json` 

fetch(url)
    .then(resposta => resposta.json())
    .then(json => console.log(json))
//

const url2 = 'https://jsonplaceholder.typicode.com/posts/1'

fetch(url2)
    .then(resposta => resposta.json())
    .then(json => console.log(json))
//