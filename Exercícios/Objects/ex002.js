class Carro{
    constructor(nome, cor, tamanho){
        this.nome = nome
        this.cor = cor
        this.tamanho = tamanho
    }

    andar(){
        return(`${this.nome} está andando!`)
    }
}

const carro1 = new Carro('fiat', 'preto', 'grande')
const carro2 = new Carro('corola', 'cinza', 'pequeno')
const carro3 = new Carro('Uno', 'vermelho', 'médio')
const carro4 = new Carro('camaro', 'amarelo', 'médio')
const carro5 = new Carro('tracker', 'azul', 'grande')

const carros = [carro1, carro2, carro3, carro4, carro5]

// for(let pos in carros){
//     console.log(carros[pos].nome)
// }

let filtrarTamanho = carros.filter(pos => pos.tamanho == 'médio')
console.log(filtrarTamanho)

carros.forEach(element => {
    console.log(element.nome)
});