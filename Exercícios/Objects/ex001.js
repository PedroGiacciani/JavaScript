class Brinquedo{
    //Base da classe
    constructor(nome, cor, size){
        this.nome = nome
        this.cor = cor
        this.size = size
    }

    //Métodos (ações que ela realiza)
    andar(){
        return(`${this.nome} está andando!`)
    }

    falar(){
        return(`${this.nome} diz Olá!`)
    }

    crescer(tamanho){
        this.size = tamanho
    }
}

class BrinquedosVoadores extends Brinquedo{
    constructor(nome, cor, size){
        super(nome, cor, size) //Executa o Constructor da classe pai
    }

    voar(metros, velocidade){
        return(`${this.nome} está voando ${metros}m de altura a ${velocidade}Km/h`)
    }
}

const BuzzLightyear = new BrinquedosVoadores('BuzzLightyear', 'verde', 'médio')
const Woody = new Brinquedo('Woody', 'marrom', 'médio')
// BuzzLightyear.nome = 'Woody'
// console.log(BuzzLightyear.nome)
console.log(Woody)
console.log(Woody.andar())
Woody.crescer('Muito grande')
console.log(Woody)

console.log(BuzzLightyear.falar())
console.log(BuzzLightyear.voar(9, 120))