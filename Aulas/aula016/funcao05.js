//Recursividade
function fator(n){
    if(n == 1){
        return 1
    } else{
        return n *= fator(n - 1)
    }
}

console.log(fator(1))