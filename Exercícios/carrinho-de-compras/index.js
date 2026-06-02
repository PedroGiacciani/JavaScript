//Definição da classe dos produtos 
class Produto{
    constructor(nome, preco, estoque){
        this.nome = nome
        this.preco = preco
        this.estoque = estoque
    }
}

//Definição da classe do carrinho
class Carrinho{
    constructor(){
        this.produtos = []
    }

    adicionarProduto(item){
        let itemExistente = this.produtos.find(pos => pos.produto == item.produto)
        //Verificar se o item já está no carrinho. Se não, adiciona e se sim aumenta apenas a quantidade
        if(!itemExistente){
            this.produtos.push(item)
        }else{
            itemExistente.quantidade += item.quantidade
        }
        item.produto.estoque -= item.quantidade //Retira do estoque a quantidade 
    }

    removerProduto(nomeProduto){
        let item = this.produtos.find(pos => pos.produto.nome == nomeProduto)
        let index = this.produtos.indexOf(item)
        //Se a quantidade de items for igual a 1, retira da array, se maior, apenas diminui a quantidade
        if(item.quantidade > 1){
            item.quantidade -= 1
        }else if(item.quantidade == 1){
            this.produtos.splice(index, 1)
        }else{
            throw new Error(`O produto que você deseja remover não está no carrinho`) //Caso não haja o produto na array
        }
        item.produto.estoque += 1 //Retorna ao estoque 
        console.log(`1 ${nomeProduto} removido(a) do carrinho!`)
    }

    calcularTotal(){
        //Formula para somar o valor da multiplicação da quantidade do produto pelo valor dele
        return this.produtos.reduce((acc, cur) => acc + (cur.produto.preco * cur.quantidade), 0)
    }

    listarProdutos(){
        //Mostra apenas os nomes e as quantidades dos produtos
        return this.produtos.map(pos => `${pos.quantidade} ${pos.produto.nome}(s)`)
    }
}

class Usuario{
    constructor(userName, saldo){
        this.userName = userName
        this.saldo = saldo
    }
}

//Declaração dos produtos
const tomate = new Produto('tomate', 7.50, 4)
const maca = new Produto('maçã', 3.50, 8)
const coca = new Produto('coca-cola', 10.00, 3)
const picanha = new Produto('picanha', 69.90, 10)
const sabao = new Produto('sabão em pó', 11.00, 6)

//Array que contêm os produtos a serem adicionados
const produtos = [
    {
        produto: sabao,
        quantidade: 5
    }
]

//Declaração do Carrinho
const carrinho = new Carrinho()
//Função que chama os produtos a serem adicionados
const addProdutos = (produtos) => produtos.forEach(pos => carrinho.adicionarProduto(pos, pos.quantidade))
//Verificar se o produto que vai ser adicionado está disponível
const verificarEstoque = (produtos) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => { //setTimeOut para a função demorar 3 segundos para verificar
            if(produtos.every(pos => pos.produto.estoque >= pos.quantidade) == true){
                resolve(`Produtos disponíveis e adicionados ao carrinho!`)
            }else{
                reject(`Produtos indisponíveis!`)
            }
        }, 3000);
    })
}

let userName = 'Oliver'
let saldo = 2000
const usuario = new Usuario(userName, saldo)

//Função base que chama todo o resto
async function finalizarCompra(produtos){
    try{ //Tenta fazer isso, se der erro o catch pega
        console.log(`Olá ${usuario.userName}\nSaldo atual: R$${usuario.saldo}`)
        const msg = await verificarEstoque(produtos)
        console.log(msg)
        addProdutos(produtos)
        //carrinho.removerProduto('coca-cola')

        console.log('\nSeu carrinho:')
        console.log(carrinho.listarProdutos())
        const valorFinal = carrinho.calcularTotal()
        console.log(`\nTotal: R$${valorFinal}`)
        console.log(`\nSaldo após a compra: R$${usuario.saldo - valorFinal}`)
    }catch(err){ //Verificação de erros
        console.log(`[ERRO] ${err}`)
    }
}

finalizarCompra(produtos)