class Produto{
    constructor(nome, preco, estoque, quantidade){
        this.nome = nome
        this.preco = preco
        this.estoque = estoque
        this.quantidade = quantidade
    }
}

class Carrinho{
    constructor(){
        this.produtos = []
    }

    adicionarProduto(nomeProduto){
        if(nomeProduto.estoque > 0){
            this.produtos.push(nomeProduto)
            nomeProduto.estoque -= 1
        }else{
            console.log(`${nomeProduto.nome} fora de estoque`)
        }
    }

    removerProduto(nomeProduto){
        let index = this.produtos.indexOf(nomeProduto)
        if(index != -1){
            this.produtos.splice(index, 1)
            nomeProduto.estoque += 1
        }
    }

    calcularTotal(){
        return this.produtos.reduce((acc, cur) => acc + cur.preco, 0)  
    }

    listarProdutos(){
        return this.produtos.map(pos => pos.nome)
    }
}

const tomate = new Produto('tomate', 7.50, 4)
const maca = new Produto('maçã', 3.50, 8)
const coca = new Produto('coca-cola', 10.00, 3)
const picanha = new Produto('picanha', 69.90, 10)
const sabao = new Produto('sabão em pó', 11.00, 6)

const produtos = [coca, tomate, picanha, coca, coca, coca]

const carrinho = new Carrinho()
const addProdutos = (produtos) => produtos.forEach(pos => carrinho.adicionarProduto(pos))
const verificarEstoque = (produtos) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(produtos.every(pos => pos.estoque > 0) == true){
                resolve(`Produtos disponíveis e adicionados ao carrinho!`)
            }else{
                reject(`Produtos indisponíveis!`)
            }
        }, 3000);
    })
}


async function finalizarCompra(produtos){
    try{
        const msg = await verificarEstoque(produtos)
        console.log(msg)
        addProdutos(produtos)
        console.log(carrinho.listarProdutos())
        const valorFinal = carrinho.calcularTotal()
        console.log(`A compra deu: R$${valorFinal}`)
    }catch(err){
        console.log(`[ERRO] ${err}`)
    }
}

finalizarCompra(produtos)