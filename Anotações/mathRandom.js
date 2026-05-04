//Gera números aletórios entre 0 e 1
let numerosRacionais = Math.random()
console.log(numerosRacionais)

//Números aleatórios entre 0 e 10.9999
let numerosNaturais = Math.floor(Math.random() * 11) //Arredonda para baixo
console.log(numerosNaturais)

//Definir intervarlo
let numerosIntervalo = Math.floor(Math.random() * (25 - 10 + 1)) + 10 //(Math.random() * (max - min + 1)) * min
console.log(numerosIntervalo) 