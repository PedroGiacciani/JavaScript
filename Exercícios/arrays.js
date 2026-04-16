//Manipulação de arrays

var a = ['pedro', 'maria', 'leandro']
var b = ['maça', 'banana', 'morango']
var c = ['Fortnite', 'Roblox', 'Minecraft']
var e = ['Vinicius']

//Converter uma array em uma string
console.log(a.toString())

//Converter uma array em string especificando separação

console.log(a.join('-'))

//Concatenar arrays

console.log(a.concat(b))

//Adicionar valor no final da array modificando-a

a.push('rosangela')
console.log(a)

//Remover o ultimo item de um array

b.pop()
console.log(b)

//Remover o primeiro item de um array

a.shift()
console.log(a)

//Adicionar um item no primeiro elemento de um array

a.unshift('pedro')
console.log(a)

//Remover e adicionar elementos de um array

b.splice(0, 2, 'Kiwi', 'Manga')
console.log(b)

b.splice(0, 3) //Limpar um array
console.log(b)

//Capturar uma parte específica do array e adicionar não alterando o original

var mensagem = 'eu sou zika'
var negacao = mensagem.slice(0, 7) + 'chato'
console.log(negacao)

//Dividir uma string em várias substrings

var nome = 'Olá, rapazes, meu nome é, Pedro'
var letras = nome.split(',', 4)
console.log(letras)

//Localizar o elemento de um valor de array

console.log(c.indexOf('Fortnite'))
console.log(c.lastIndexOf('Fortnite')) //Esquerda para a direita

//Condição de arrays

var num = [1, 2, 3, 4, 5, 6]
const terceiro = num.filter(n => n == 3)
console.log(terceiro)