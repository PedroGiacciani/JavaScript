let estoque = ['tomate', 'cebola', 'pimentão', 'alface', 'cebolinha']
let item = 'tomate'
let nome = 'Pedro'

function validarPedido(item){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(estoque.includes(item)){
                console.log('Produto em estoque')
                resolve()
            } else{
                reject(`Produto indisponível`)
            }
        }, 1000);
    })
}

function processarPagamento(nome){
    let verificarPagamento = Math.random() < 0.7
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(verificarPagamento == true){
                console.log(`${nome}, Pagamento realizado!`)
                resolve()
            } else{
                reject(`Pagamento recusado`)
            }
        }, 1000);
    })
}

function preparandoPedido(item){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Pedido de ${item} realizado!`)
            resolve()
        }, 2000)
    })
}

function entregarPedido(nome, item){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`${nome}, seu pedido de ${item} foi entregue!!`)
            resolve()
        }, 3000)
    })
}

async function pedido(item, nome){
    try{
        await validarPedido(item)
        await processarPagamento(nome)
        await preparandoPedido(item)
        await entregarPedido(nome, item)
        console.log(`Obrigado pela preferência!`)

    } catch(erro){
        console.log(`[ERRO] ${erro}`)
    }
}

pedido(item, nome)