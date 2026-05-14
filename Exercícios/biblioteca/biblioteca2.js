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
}

//Declaração da Object Array
let livros = [
    new Livro('Harry Potter 1', 'J. K. Rowling', true),
    new Livro('Alice no País das Maravilhas', 'Lewis Carrol', true),
    new Livro('Fnaf: Silver Eyes', 'Scott Cawthon', false),
    new Livro('Cartas de um Diabo ao seu Aprendiz', 'C. S. Lewis', false),
    new Livro('A Arte da Guerra', 'Sun Tzu', true)
]