var data = new Date()
var dia = data.getDay()

switch(dia){
    case 0:
        console.log('Fim de semana')
        break
    case 1:
        console.log('Ínicio da semana')
        break
    case 2:
        console.log('Ínicio da semana')
        break
    case 3:
        console.log('Finalmente meio da semana')
        break
    case 4:
        console.log('Quase sexta ein...')
        break
    case 5:
        console.log('SEXTOUUU !')
        break
    case 6:
        console.log('Fim de semana')
        break
    default:
        console.log('Dia inválido') 
        break
}
