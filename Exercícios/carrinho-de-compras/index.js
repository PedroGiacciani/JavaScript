class Produto{
    constructor(nome, preco, estoque){
        this.nome = nome
        this.preco = preco
        this.estoque = estoque
    }
}

class Carrinho{
    constructor(produtos, valorFinal){
        this.produtos = produtos
        this.valorFinal = valorFinal
    }

    adicionarProduto(nomeProduto){
        produtos.push(nomeProduto)
        nomeProduto.estoque -= 1
    }

    removerProduto(nomeProduto){
        let index = produtos.indexOf(nomeProduto)
        if(index != -1){
            produtos.splice(index, 1)
            nomeProduto.estoque += 1
        }
    }

    calcularTotal(){
        
    }

    listarProdutos(){

    }
}

const tomate = new Produto('tomate', 7.50, 4)
const maca = new Produto('maçã', 3.50, 8)
const coca = new Produto('coca-cola', 10.00, 3)
const picanha = new Produto('picanha', 69.90, 10)
const sabao = new Produto('sabão em pó', 11.00, 6)

const produtos = []

const carrinho = new Carrinho(produtos)
carrinho.adicionarProduto(sabao)
carrinho.adicionarProduto(sabao)
carrinho.adicionarProduto(tomate)
carrinho.adicionarProduto(picanha)

console.log(carrinho.produtos)