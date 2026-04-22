let pizza = document.getElementById('ipizza')
let saborPizza = String(pizza.value)
let res = document.querySelector('div#res')
let botao = document.getElementById('botao')
botao.addEventListener('click', prepararPizza(saborPizza, pronto(saborPizza)))

function prepararPizza(sabor, callback){
    res.innerHTML = `Estamos preparando sua pizza de ${sabor}. Aguarde...`
    setTimeout(() => callback(sabor), 2000);
}

const pronto = (sabor) => res.innerHTML = `Prontinho, pizza de ${sabor} pronta`