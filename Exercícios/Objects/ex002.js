//Declaração de classe
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

//Declaração de objects
const carro1 = new Carro('fiat', 'preto', 'grande')
const carro2 = new Carro('corola', 'cinza', 'pequeno')
const carro3 = new Carro('Uno', 'vermelho', 'médio')
const carro4 = new Carro('camaro', 'amarelo', 'médio')
const carro5 = new Carro('tracker', 'azul', 'grande')

//Array de objetos
const carros = [carro1, carro2, carro3, carro4, carro5]
console.log(carros)

let filtrarTamanho = carros.filter(pos => pos.tamanho == 'médio') //Filtrar objetos

filtrarTamanho.forEach(element => {
    console.log(element.nome)
});

console.log(carros.find(pos => pos.nome == 'Uno')) //Procurar carro específico