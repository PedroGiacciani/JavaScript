const myPromise = new Promise((resolve, reject) => {
    const nome = 'Matheus'

    if(nome === 'Matheus'){
        resolve('Usuário Matheus encontrado!!')
    }else{
        reject('Usuário Matheus não encontrado!!')
    }
})

myPromise.then((data) => console.log(data))

//Encadeamento de then

const myPromise2 = new Promise((resolve, reject) => {
    const nome = 'Matheus'

    if(nome === 'Matheus'){
        resolve('Usuário Matheus encontrado!!')
    }else{
        reject('Usuário Matheus não encontrado!!')
    }
})

myPromise2
    .then((data) => {
        return data.toUpperCase()
    })
    .then((stringModificada) =>{
        console.log(stringModificada)
    })

//Metodo Catch

const myPromise3 = new Promise((resolve, reject) => {
    const nome = 'Carlos'

    if(nome === 'Matheus'){
        resolve('Usuário Matheus encontrado!!')
    }else{
        reject('Usuário Matheus não encontrado!!')
    }
})

myPromise3
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(`Aconteceu um erro: ${err}`)
    })