let num = [1, 3, 9] //Array
num[3] = 5 //Adicionar valor ao array em um elemento específico
num.push(7) //Adicionar valor ao array no último elemento 
num.sort() //Organizar elementos em ordem crescente

console.log(`O vetor vale: ${num}`)
console.log(`O vetor tem ${num.length} elementos`) //Quantidade de elementos em um array
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(3) //Procurar chave de um valor específico de uma array

if(pos == -1){
    console.log(`Valor não encontrado`)
} else{
    console.log(`O valor 3 está na posição ${pos}`)
}
