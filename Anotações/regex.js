const nome = 'Pedro Henrique Giacciani Augusto'
const numeros = '1, 10, 100, 1000'
console.log(nome.search(/h/i))
console.log(nome.match(/R/ig))

console.log(nome.match(/[a-mz|1-9]/ig)) //  | indica também

//Meta caracteres
console.log(nome.match(/\d/ig)) // \d indica Digitos numericos 
console.log(nome.match(/\s/ig)) // \s indica espaços
console.log(nome.match(/\bP/)) // \bP indica um digito textual

//Quantificadores 
console.log(numeros.match(/10/g)) //Retorna todos os 10
console.log(numeros.match(/10+/g)) //Retorna todas as sentenças que possuem 10
console.log(numeros.match(/10*/g)) //Retorna todas as sentenças que tenham ou 1 ou 0
console.log(numeros.match(/10?/g)) //Retorna todos os 1 ou 10

//Ancoras]
n = '401.815.588-08'
const re = /[0-9]{3}[.][0-9]{3}[.][0-9]{3}[-][0-9]{2}/ //Validar formato CPF
const re2 = /[0-9]{2}$/ //Teste com $ e ^
console.log(re2.test(n))

let data = '2026/23/08'
const reData = /([0-9]{4})\/([01][0-9])\/([0-9]{2})/

let resultado = data.match(reData)

if(resultado){
    novaData = data.replace(reData, '$3/$2/$1')
    console.log(novaData)
}else{
    console.log('ok')
}