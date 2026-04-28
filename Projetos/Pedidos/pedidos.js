let nome = 'Ricardo'
let sabor = 'Frango com Catupiry'

const esperar = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), 3000)
    })
}

const pedidoFeito = (nome, sabor) => console.log(`Olá ${nome}, seu pedido de pizza de ${sabor} foi registrado`)
const preparando = (nome) => console.log(`${nome}, seu pedido está sendo preparado...`)
const pedidoPronto = (nome, sabor) => console.log(`${nome}, seu pedido de pizza de ${sabor} está pronto e indo até você!`)
const pedidoEntregue = (nome, sabor) => console.log(`${nome}, pizza de ${sabor} entregue! Obrigado pela preferência`)

esperar().then(() => {
    pedidoFeito(nome, sabor)
    return esperar()
}).then(() => {
    preparando(nome)
    return esperar()
}).then(() => {
    pedidoPronto(nome, sabor)
    return esperar()
}).then(() => {
    pedidoEntregue(nome, sabor)
})