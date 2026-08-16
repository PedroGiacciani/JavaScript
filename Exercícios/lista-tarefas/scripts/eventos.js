export function listarDados(areaTarefa, listaTarefas){
    areaTarefa.innerHTML = `` 
    if(listaTarefas.length == 0){
        areaTarefa.innerHTML = `Nenhuma tarefa cadastrada`
    } else{
        listaTarefas.forEach(element =>{
            if(element.concluida){
                areaTarefa.innerHTML += `
                    <div class="tarefa">
                        <p>${element.id}</p> <p>${element.titulo}</p> <p><mark class="badge-${element.concluida}">Concluída</mark></p> <p>${element.dataCriacao}</p>
                    </div>
                ` 
            }else{
                areaTarefa.innerHTML += `
                    <div class="tarefa">
                        <p>${element.id}</p> <p>${element.titulo}</p> <p><mark class="badge-${element.concluida}">Em andamento</mark></p> <p>${element.dataCriacao}</p>
                    </div>
                ` 
            }
            let tarefa = document.getElementsByClassName('tarefa')
            tarefa.addEventListener('dblclick', () => editarTarefa(tarefa, element))
        })
    }
}

export function filtrarTarefas(areaTarefa, listaTarefas, filtro){
    let filtroTarefas = []
    if(filtro.value == 'Todas'){
        filtroTarefas = listaTarefas
    }else{
        filtroTarefas = listaTarefas.filter(element => String(element.concluida) == filtro.value)
    }
    areaTarefa.innerHTML = ``
    filtroTarefas.forEach(element => {
        if(element.concluida){
                areaTarefa.innerHTML += `
                    <div class="tarefa">
                        <p>${element.id}</p> <p>${element.titulo}</p> <p><mark class="badge-${element.concluida}">Concluída</mark></p> <p>${element.dataCriacao}</p>
                    </div>
                ` 
            }else{
                areaTarefa.innerHTML += `
                    <div class="tarefa">
                        <p>${element.id}</p> <p>${element.titulo}</p> <p><mark class="badge-${element.concluida}">Em andamento</mark></p> <p>${element.dataCriacao}</p>
                    </div>
                ` 
            }
    })

    if(filtroTarefas.length == 0){
        areaTarefa.innerHTML = `Sem tarefas`
    }
}

export function pesquisarTarefa(areaTarefa, listaTarefas, pesquisa){
    let filtroTarefas = listaTarefas.filter(element => element.titulo.toLowerCase().includes(pesquisa))
    areaTarefa.innerHTML = ``
    filtroTarefas.forEach(element => {
        if(element.concluida){
                areaTarefa.innerHTML += `
                    <div class="tarefa">
                        <p>${element.id}</p> <p>${element.titulo}</p> <p><mark class="badge-${element.concluida}">Concluída</mark></p> <p>${element.dataCriacao}</p>
                    </div>
                ` 
            }else{
                areaTarefa.innerHTML += `
                    <div class="tarefa">
                        <p>${element.id}</p> <p>${element.titulo}</p> <p><mark class="badge-${element.concluida}">Em andamento</mark></p> <p>${element.dataCriacao}</p>
                    </div>
                ` 
            }
    })

    if(filtroTarefas.length == 0){
        areaTarefa.innerHTML = `Tarefa não encontrada`
    }
}

export function editarTarefa(tarefa, element){
    if(element.concluida){
        tarefa.innerHTML = `<p>${element.id} <input name="novo-titulo" id="inovo-titulo"></input> <mark class="badge-${element.concluida}">Concluída</mark> ${element.dataCriacao}</p>`
    }else{
        tarefa.innerHTML = `<p>${element.id} <input name="novo-titulo" id="inovo-titulo"></input> <mark class="badge-${element.concluida}">Em andamento</mark> ${element.dataCriacao}</p>`
    }

    let novoTitulo = document.getElementById('inovo-titulo')
    novoTitulo.focus()
    novoTitulo.addEventListener('keydown', (event) => {
        if(event.key == 'Enter'){
            if(element.concluida){
                tarefa.innerHTML = `                    
                    <p>${element.id}</p> <p>${element.titulo}</p> <p><mark class="badge-${element.concluida}">Concluída</mark></p> <p>${element.dataCriacao}</p>
                `
            }else{
                tarefa.innerHTML = `
                    <p>${element.id}</p> <p>${element.titulo}</p> <p><mark class="badge-${element.concluida}">Em andamento</mark></p> <p>${element.dataCriacao}</p>
                `
            }
        }
    })
}