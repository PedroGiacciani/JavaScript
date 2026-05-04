let nome = 'Maurílio'
let sabor = 'Cheddar e Bacon'

const delay = (mensagem) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(mensagem)
            resolve()
        }, 2000);
    })
}

async function chamar(nome, sabor){
    try{
        await delay(`Olá ${nome}, seu pedido de pizza de ${sabor} foi registrado!`)
        await delay(`${nome}, seu pedido de pizza de ${sabor} está sendo preparado`)
        await delay(`${nome}, seu pedido de pizza de ${sabor} está pronto!`)
        await delay(`${nome}, seu pedido de pizza de ${sabor} chegou ao local da entrega!`)
    } catch{
        console.log("[ERRO]")
    }
}

chamar(nome, sabor)