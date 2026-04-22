/*Teste com callbacks e setTimeout()*/
function frase(nome, callback){
    console.log("Olá")
    setTimeout(() => callback(nome), 1500)
}

const continuar = () => console.log("Tudo bem?")

//frase(continuar)

//Exemplo com função anônima
frase(function (){
    console.log("Estou com saudades")
})
//frase(() => console.log("Estou com saudades")) mesmo exemplo mas com arrow function

//Callback + parâmetros
frase("Maria", (nome) => console.log(`${nome}, estou com saudades`))