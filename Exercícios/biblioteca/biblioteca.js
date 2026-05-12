class Livro{
    constructor(nome, autor, disponibilidade){
        this.nome = nome
        this.autor = autor
        if(disponibilidade == true){
            this.disponibilidade = 'Disponível'
        } else{
            this.disponibilidade = 'Indisponível'
        }
    }
}

let livros = [
    new Livro('Harry Potter 1', 'J. K. Rolling', true),
    new Livro('Fazbear Frights 2: Fetch', 'Scott Cawthon', true),
    new Livro('Alice no País das Maravilhas', 'Lewis Carol', false),
    new Livro('Cartas de um Diabo ao seu aprendiz', 'C. S. Lewis', true),
    new Livro('A arte da Guerra', 'Shun Tzu', false)
]

let livrosDisponiveis = livros.filter(pos => pos.disponibilidade == 'Disponível')

function isAvaible(nomeLivro){
    if(livrosDisponiveis.find(pos => pos.nome == nomeLivro)){
        return true
    } else{
        return false
    }
}

function emprestarLivro(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 2000)
    })
}

let nomeLivro = 'Cartas de um Diabo ao seu aprendiz'
let usuario = 'Pedro'

async function pegarLivro(nomeLivro, usuario){
    try{
        if(isAvaible(nomeLivro) == true){
            console.log(`Olá ${usuario}, o livro ${nomeLivro} está disponível.\nAguarde 2 segundos enquanto preparamos ele para você`)
            await emprestarLivro()
        }
    } catch{

    }
}

pegarLivro(nomeLivro, usuario)