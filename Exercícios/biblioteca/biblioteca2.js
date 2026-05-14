//Declaração de Variáveis
let nomeLivro = 'A Arte da Guerra'
let usuario = 'Pedro'

//Declaração da Classe Livro
class Livro{
    constructor(nome, autor, disponibilidade){
        this.nome = nome
        this.autor = autor
        this.disponibilidade = disponibilidade
    }

    emprestarLivro(usuario){
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(`Agradecemos a preferência em alugar um livro conosco!!`)
                if(this.disponibilidade == true){
                    this.disponibilidade = false
                    console.log(`Livro ${this.nome} emprestado para ${usuario}`)
                    resolve()
                } else if(this.disponibilidade == false){
                    this.devolverLivro(usuario)
                    resolve()
                }
            }, 2000);
        })    
    }

    devolverLivro(usuario){
        this.disponibilidade = true
        console.log(`Livro: ${this.nome} devolvido por ${usuario}`)
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

let livroEscolhido = livros.find(pos => pos.nome == nomeLivro)


async function interagirLivro(usuario){
    console.log(`Olá ${usuario},`)
    if(livroEscolhido != undefined){
        await livroEscolhido.emprestarLivro(usuario)
    } else{
        console.log(`Sentimos muito, parece que o livro que procura está indisponível`)
    }
}

interagirLivro(usuario)