//Declaração de variáveis
let a = []
let num = document.getElementById('inum')
let sel = document.getElementById('isel')
let res = document.getElementById('res')

//Função que analisa se o número está dentro do intervalo
function isNumero(n){
    if(n < 1 || n > 100 || n.length == 0){
        return false
    } else {
        return true
    }
}

//Função que analisa se o número já está no array
function inLista(l, n){
    if(l.indexOf(Number(n)) == -1){
        return false
    } else{
        return true
    }
}

//Adicionar número na array
function adicionar(){
    if( !isNumero(num.value) || inLista(a, num.value)){ //Validar dados
        window.alert("[ERRO] Número repetido ou fora fora do intervalo (1 - 100)")
    } else{
        res.innerHTML = ``
        //Adicionar na array
        a.push(Number(num.value))
        //Mostrar na lista
        let op = document.createElement('option')
        sel.appendChild(op)
        op.innerHTML = `Valor ${num.value} adicionado`
    }

    //Foco volta para a barra após adicionar número
    num.value = ``
    num.focus()
}

//Fazer a análise dos dados da array
function verificar(){
    if(a.length == 0){ //Validar se há dados na array
        window.alert("Adicione pelo menos um número!")
    } else{
        //Declaração de variáveis
        let total = a.length
        let soma = 0
        let media = 0
        let maior = a[0]
        let menor = a[0]

        //a.sort((a, b) => a - b)

        //Realizar soma e conferir maior e menor
        for(let pos in a){
            soma += a[pos]
            if(maior < a[pos]){
                maior = a[pos]
            } else if(menor > a[pos]){
                menor = a[pos] 
            }
        }
        media = soma/total

        //Mostrar resultados na tela
        res.innerHTML = `<p>O total de números cadastrados é ${total}</p><br>
        <p>O maior número cadastrado é ${maior}</p><br>
        <p>O menor número cadastrado é ${menor}</p><br>
        <p>A soma dos números cadastrados é ${soma}</p><br> 
        <p>A média dos números cadastrados é ${media}</p>`
    }
}