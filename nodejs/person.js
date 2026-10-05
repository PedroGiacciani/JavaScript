class Person{
    constructor(nome){
        this.nome = nome
    }

    sayMyName(){
        return `My name is: ${this.nome}`
    }
}

module.exports = {
    Person, 
}