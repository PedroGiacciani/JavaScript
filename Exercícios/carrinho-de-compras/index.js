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

    adicionarProduto(item, quantidade){
        let falta = (quantidade - item.produto.estoque) 
        for(let i = 0; i < quantidade && item.produto.estoque > 0; i++){
            this.produtos.push(item)
            item.produto.estoque -= 1
        }
        if(item.produto.estoque <= 0){
            console.log(`${falta} ${item.produto.nome}(s) fora de estoque`)
        }
    }

    removerProduto(item){
        let index = this.produtos.indexOf(item)
        if(index != -1){
            this.produtos.splice(index, 1)
            item.produto.estoque += 1
        }
    }

    calcularTotal(){
        return this.produtos.reduce((acc, cur) => acc + cur.produto.preco * cur.quantidade, 0)  
    }

    listarProdutos(){
        return this.produtos.map(pos => pos.produto.nome)
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
        quantidade: 4
    },
    {
        produto: tomate,
        quantidade: 1
    },
    {
        produto: picanha,
        quantidade: 21
    },
]

const carrinho = new Carrinho()
const addProdutos = (produtos) => produtos.forEach(pos => carrinho.adicionarProduto(pos, pos.quantidade))
const verificarEstoque = (produtos) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(produtos.every(pos => pos.produto.estoque > 0) == true){
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
        console.log(produtos)
        const valorFinal = carrinho.calcularTotal()
        console.log(`A compra deu: R$${valorFinal}`)
    }catch(err){
        console.log(`[ERRO] ${err}`)
    }
}

finalizarCompra(produtos)