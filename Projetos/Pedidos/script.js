let pizza = document.getElementById('ipizza')
let nome = document.getElementById('inome')
let res = document.querySelector('div#res')

function chamar(){
    let saborPizza = String(pizza.value)
    let nomePedido = String(nome.value)
    if(saborPizza.length == 0 || nomePedido.length == 0){
        alert("Preencha todos os campos!")
    }else{
        res.innerHTML = `Olá ${nomePedido}, seu pedido de pizza de ${saborPizza} foi recebido!. Aguarde enquanto preparamos...`
        setTimeout(() => pizzaPronta(nomePedido, saborPizza),4000);
    }
}

const pizzaPronta = (nome, sabor) => res.innerHTML = `Pronto ${nome}, sua pizza de ${sabor} está pronta!!`