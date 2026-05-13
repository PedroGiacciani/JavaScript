//Declaração de Variáveis
let nomeLivro = 'A Arte da Guerra'
let usuario = 'Pedro'

//Declaração da Classe Livro
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

//Declaração da Object Array
let livros = [
    new Livro('Harry Potter 1', 'J. K. Rowling', true),
    new Livro('Alice no País das Maravilhas', 'Lewis Carrol', true),
    new Livro('Fnaf: Silver Eyes', 'Scott Cawthon', false),
    new Livro('Cartas de um Diabo ao seu Aprendiz', 'C. S. Lewis', false),
    new Livro('A Arte da Guerra', 'Sun Tzu', true)
]

let livrosDisponiveis = livros.filter(pos => pos.disponibilidade == 'Disponível')

function isAvaible(nomeLivro){
    let livroEscolhido = livrosDisponiveis.find(pos => pos.nome == nomeLivro)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(livroEscolhido){
                console.log(`Seu livro: ${nomeLivro} está sendo preparado...`)
                resolve()
            }else{
                reject(`Sentimos muito, seu livro: ${nomeLivro} está indisponível`)
            }
        }, 2000)
    })
}

function prepararLivro(nomeLivro, usuario){
    let livroEscolhido = livrosDisponiveis.find(pos => pos.nome == nomeLivro)
    return new Promise((resolve) => {
        setTimeout(() => {
            livroEscolhido.disponibilidade = false
            livrosDisponiveis = livros.filter(pos => pos.disponibilidade == 'Disponível')
            console.log(`Livro: ${nomeLivro}, emprestado para ${usuario}`)
            resolve()
        }, 4000)  
    })
}

async function emprestarLivro(nomeLivro, usuario){
    try{
        console.log(`Olá ${usuario}, agradecemos a preferência!!`)
        await isAvaible(nomeLivro)
        await prepararLivro(nomeLivro, usuario)
    } catch(err){
        console.log(`[ERRO]: ${err}`)
    }
}

emprestarLivro(nomeLivro, usuario)