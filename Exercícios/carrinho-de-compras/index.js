class Produto{
    constructor(nome, preco, estoque){
        this.nome = nome
        this.preco = preco
        this.estoque = estoque
    }
}

class Carrinho{
    constructor(){
        this.produtos = []
    }

    adicionarProduto(item){
        let itemExistente = this.produtos.find(pos => pos.produto == item.produto)
        if(!itemExistente){
            this.produtos.push(item)
        }else{
            itemExistente.quantidade += item.quantidade
        }
        item.produto.estoque -= item.quantidade
    }

    removerProduto(nomeProduto){
        let item = this.produtos.find(pos => pos.produto.nome == nomeProduto)
        let index = this.produtos.indexOf(item)
        if(item.quantidade > 1){
            item.quantidade -= 1
        }else if(item.quantidade == 1){
            this.produtos.splice(index, 1)
        }else{
            throw new Error(`O produto que você deseja remover não está no carrinho`)
        }
        item.produto.estoque += 1
        console.log(`1 ${nomeProduto} removido(a) do carrinho!`)
    }

    calcularTotal(){
        return this.produtos.reduce((acc, cur) => acc + (cur.produto.preco * cur.quantidade), 0)  
    }

    listarProdutos(){
        return this.produtos.map(pos => `${pos.quantidade} ${pos.produto.nome}(s)`)
    }
}

const tomate = new Produto('tomate', 7.50, 4)
const maca = new Produto('maçã', 3.50, 8)
const coca = new Produto('coca-cola', 10.00, 3)
const picanha = new Produto('picanha', 69.90, 10)
const sabao = new Produto('sabão em pó', 11.00, 6)

const produtos = [
    {
        produto: coca,
        quantidade: 3
    },
    {
        produto: tomate,
        quantidade: 1
    },
    {
        produto: picanha,
        quantidade: 2
    },
]

const carrinho = new Carrinho()
const addProdutos = (produtos) => produtos.forEach(pos => carrinho.adicionarProduto(pos, pos.quantidade))
const verificarEstoque = (produtos) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(produtos.every(pos => pos.produto.estoque >= pos.quantidade) == true){
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
        carrinho.removerProduto('coca-cola')

        console.log('\nSeu carrinho:')
        console.log(carrinho.listarProdutos())
        const valorFinal = carrinho.calcularTotal()
        console.log(`\nTotal: R$${valorFinal}`)
        console.log(carrinho.produtos)
    }catch(err){
        console.log(`[ERRO] ${err}`)
    }
}

finalizarCompra(produtos)