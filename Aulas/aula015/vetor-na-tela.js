let valores = [8, 4, 2, 5, 9]
valores.sort() //Organizar elementos do array em ordem crescente

/*
for(let pos = 0; pos < valores.length; pos++){ //Percurso de exibição de vetores
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}
*/

for(let pos in valores){
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}