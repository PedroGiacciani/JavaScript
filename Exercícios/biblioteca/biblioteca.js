//Declaração de Variáveis
let nomeLivro = 'bla bla bla'
let usuario = 'Pedro'

//Declaração da Classe Livro
class Livro{
    constructor(nome, autor, disponibilidade){
        this.nome = nome
        this.autor = autor
        this.disponibilidade = disponibilidade
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

let livrosDisponiveis = livros.filter(pos => pos.disponibilidade == true)

function isAvaible(nomeLivro){
    let livroEscolhido = livros.find(pos => pos.nome == nomeLivro)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(livroEscolhido != undefined && livroEscolhido.disponibilidade == true){
                console.log(`Seu livro: ${nomeLivro} está sendo preparado...`)
                resolve()
            }else if(livroEscolhido != undefined && livroEscolhido.disponibilidade == false){
                console.log(`Obrigado pela preferência ao alugar nosso livro!!`)
                resolve()
            }else{
                reject(`Sentimos muito, parece que esse livro se encontra indisponível`)
            }
        }, 2000)
    })
}

function prepararLivro(nomeLivro, usuario){
    let livroEscolhido = livros.find(pos => pos.nome == nomeLivro)
    return new Promise((resolve) => {
        setTimeout(() => {
            if(livroEscolhido.disponibilidade == true){
                livroEscolhido.disponibilidade = false
                livrosDisponiveis = livros.filter(pos => pos.disponibilidade == true)
                console.log(`Livro: ${nomeLivro}, emprestado para ${usuario}`)
                resolve()
            }else{
                livroEscolhido.disponibilidade = true
                livrosDisponiveis = livros.filter(pos => pos.disponibilidade == true)
                console.log(`Livro: ${nomeLivro}, devolvido por ${usuario}`)
                resolve()                
            }
        }, 4000)  
    })
}

async function interagirLivro(nomeLivro, usuario){
    try{
        console.log(`Olá ${usuario},`)
        await isAvaible(nomeLivro)
        await prepararLivro(nomeLivro, usuario)
    } catch(err){
        console.log(`[ERRO]: ${err}`)
    }
}

interagirLivro(nomeLivro, usuario)