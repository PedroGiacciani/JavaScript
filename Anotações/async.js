function primeiraFuncao() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Passou 1 segundo")
            resolve()
        }, 1000);
    })
}

async function segundaFuncao() {
    console.log("Ínicio")
    await primeiraFuncao()
    console.log("Fim")
}

segundaFuncao()