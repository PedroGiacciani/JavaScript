class Carro{
    constructor(marca, cor, tamanho){
        this.marca = marca
        this.cor = cor
        this.tamanho = tamanho
    }

    getFullName(){
        console.log(`${this.marca} ${this.cor}`)        
    }

    //Método estático
    static speak(){
        console.log("Hello World")
    }
}

const carro = new Carro("Fiat", "prata", 'grande')

carro.getFullName()
Carro.speak()

//Extensão de classe

class Animal{
    constructor(name){
        this.name = name
    }

    speak(){
        console.log(`${this.name} made some noise!`)
    }
}

class Dog extends Animal{
    constructor(name){
        super(name)
    }

    speak(){
        console.log(`${this.name} barked!`)
    }
}

const animal = new Animal('Thor')
const dog = new Dog('Sebastian')
dog.speak()