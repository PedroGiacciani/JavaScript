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

//Resolver várias Promises

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p1 está ok"), 2000)
})

const p2 = new Promise((resolve, reject) => {
    resolve("p2 está ok")
})

const p3 = new Promise((resolve, reject) => {
    resolve("p3 está ok")
})

const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
    console.log(data)
})
