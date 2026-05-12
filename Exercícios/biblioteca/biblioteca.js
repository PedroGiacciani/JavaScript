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

const conferirDisponivel = () => {
    console.log(livros.filter(pos => pos.disponibilidade == 'Disponível'))
}

const buscarLivro = () => {
    
}

conferirDisponivel()