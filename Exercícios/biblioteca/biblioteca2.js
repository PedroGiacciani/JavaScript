//Declaração de Variáveis
let nomeLivro = 'Cartas de um Diabo ao seu Aprendiz'
let usuario = 'Rosangela'

//Declaração da Classe Livro
class Livro{
    constructor(nome, autor, disponibilidade){
        this.nome = nome
        this.autor = autor
        this.disponibilidade = disponibilidade
    }

    emprestarLivro(usuario){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(this.disponibilidade == true){
                    this.disponibilidade = false
                    console.log(`Livro ${this.nome} emprestado para ${usuario}`)
                    resolve()
                } else if(this.disponibilidade == false){
                    reject(`Sentimos muito, parece que ${this.nome} está indisponível!!`)
                }
            }, 2000);
        })    
    }

    devolverLivro(usuario){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(this.disponibilidade == false){
                    this.disponibilidade = true
                    console.log(`Livro ${this.nome} devolvido por ${usuario}`)
                    resolve()
                } else if(this.disponibilidade == true){
                    reject(`Sentimos muito, parece que ${this.nome} já foi devolvido!!`)
                }
            }, 3000);
        })  
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

async function interagirLivro(promessa){
    console.log(`Olá ${usuario},\nAgradecemos a preferência em alugar um livro conosco!`)
    try{
        if(promessa == `devolver`){
            await livroEscolhido.devolverLivro(usuario)
        }else if(promessa == `emprestar`){
            await livroEscolhido.emprestarLivro(usuario)
        }else{
            throw new Error(`Função ${promessa} inválida`)
        }
    }catch(err){
        console.log(`${err}`)
    }
}

if(livroEscolhido == undefined){
    console.log(`Sentimos muito, esse livro não faz parte do nosso catálogo`)
}else{
    interagirLivro(`devolver`)
}
