let nome = 'Pedro'
let sabor = 'Pepperoni'

function chamar(nome, sabor, callback){
    setTimeout(() => {
        callback('pedro', 'mussarela', recebido, preparando, pronto, entrega)
    }, 1000)
}
 
function chamada(nome, sabor, c1, c2, c3, c4){
    c1(nome, sabor)

    setTimeout(() => {
        c2(nome, sabor)

        setTimeout(() => {
            c3(nome, sabor)

            setTimeout(() => {
                c4(nome)
                
            }, 1500)

        }, 1500)

    }, 1500)
}

const recebido = (nome, sabor) => console.log(`Olá ${nome}, seu pedido de pizza de ${sabor} foi registrado e está sendo preparado!!`)
const preparando = (nome, sabor) => console.log(`${nome}, sua pizza de ${sabor} está sendo preparada...`)
const pronto = (nome, sabor) => console.log(`${nome}, sua pizza de ${sabor} está pronta!!`)
const entrega = (nome) => console.log(`${nome}, seu pedido foi entregue!`)

chamar(nome, sabor, chamada)

// chamar('Amanda', 'Frango com catupiry', pronto, entrega)
// chamar('Nilo', 'Pepperoni', pronto, entrega)
// chamar('Robson', 'Mussarela', pronto, entrega)