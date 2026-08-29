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

let data = '2007/12/17'
const reData = /^(\d{4})\/(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])$/
const reData2 = /^(\d{4})\/(0?[1-9]|1[0-2])\/(0?[1-9]|[12][0-9]|3[01])$/
const reData3 = /^(0?[1-9]|1[0-2])\/(\d{4})\/(0?[1-9]|[12][0-9]|3[01])$/
const reData4 = /^(0?[1-9]|1[0-2])\/(0?[1-9]|[12][0-9]|3[01])\/(\d{4})$/
const reData5 = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/(\d{4})$/
const reData6 = /^(0?[1-9]|[12][0-9]|3[01])\/(\d{4})\/(0?[1-9]|1[0-2])$/

if(reData.test(data)){
    let novaData = data.replace(reData, "$2/$3/$1")
    console.log(novaData)
}else if(reData2.test(data)){
    let novaData = data.replace(reData2, "$3/$2/$1")
    console.log(novaData)
}else if(reData3.test(data)){
    let novaData = data.replace(reData3, "$3/$1/$2")
    console.log(novaData)
}else if(reData4.test(data)){
    let novaData = data.replace(reData4, "$2/$1/$3")
    console.log(novaData)
}else if(reData5.test(data)){
    console.log(`A data está ok ${data}`)
}else if(reData6.test(data)){
    let novaData = data.replace(reData6, "$1/$3/$2")
    console.log(novaData)
}else{
    console.log("Formato de data inválido")
}