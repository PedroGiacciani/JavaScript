export function listarDados(areaTarefa, listaTarefas){
    areaTarefa.innerHTML = `` 
    areaTarefa.style.display = 'block'
    if(listaTarefas.length == 0){
        areaTarefa.innerHTML = `Nenhuma tarefa cadastrada`
    } else{
        listaTarefas.forEach(element =>{
            if(element.concluida){
                areaTarefa.innerHTML += `
                    <div id="tarefa">
                        <p>${element.id} ${element.titulo} <mark class="badge-${element.concluida}">Concluída</mark> ${element.dataCriacao}</p>
                    </div>
                ` 
            }else{
                areaTarefa.innerHTML += `
                    <div id="tarefa">
                        <p>${element.id} ${element.titulo} <mark class="badge-${element.concluida}">Em andamento</mark> ${element.dataCriacao}</p>
                    </div>
                `
            }
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
                    <div id="tarefa">
                        <p>${element.id} ${element.titulo} <mark class="badge-${element.concluida}">Concluída</mark> ${element.dataCriacao}</p>
                    </div>
                ` 
            }else{
                areaTarefa.innerHTML += `
                    <div id="tarefa">
                        <p>${element.id} ${element.titulo} <mark class="badge-${element.concluida}">Em andamento</mark> ${element.dataCriacao}</p>
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
                    <div id="tarefa">
                        <p>${element.id} ${element.titulo} <mark class="badge-${element.concluida}">Concluída</mark> ${element.dataCriacao}</p>
                    </div>
                ` 
            }else{
                areaTarefa.innerHTML += `
                    <div id="tarefa">
                        <p>${element.id} ${element.titulo} <mark class="badge-${element.concluida}">Em andamento</mark> ${element.dataCriacao}</p>
                    </div>
                `
            }
    })

    if(filtroTarefas.length == 0){
        areaTarefa.innerHTML = `Tarefa não encontrada`
    }
}

export function editarTarefa(titulo){
    
}