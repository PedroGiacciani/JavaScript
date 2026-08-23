import { mostrarTarefas } from "./tarefas.js"

export function filtrarTarefas(areaTarefa, listaTarefas, filtro){
    let filtroTarefas = []
    if(filtro.value == 'Todas'){
        filtroTarefas = listaTarefas
    }else{
        filtroTarefas = listaTarefas.filter(element => String(element.concluida) == filtro.value)
    }
    mostrarTarefas(areaTarefa, filtroTarefas)
    if(filtroTarefas.length == 0){
        areaTarefa.innerHTML = `Sem tarefas`
    }
}

export function pesquisarTarefa(areaTarefa, listaTarefas, pesquisa){
    let filtroTarefas = listaTarefas.filter(element => element.titulo.toLowerCase().includes(pesquisa))
    mostrarTarefas(areaTarefa, filtroTarefas)
    if(filtroTarefas.length == 0){
        areaTarefa.innerHTML = `Tarefa não encontrada`
    }
}

export function editarTarefa(nomeTarefa, index, areaTarefa, listaTarefas){
    nomeTarefa.innerHTML = `<input name="novo-titulo" class="novoTitulo" placeholder="Digite o novo titulo"></input>`
    let novoTitulo = nomeTarefa.querySelector('input.novoTitulo')
    novoTitulo.focus()
    novoTitulo.addEventListener('keydown', (event) => {
        if(event.key == 'Enter'){
            listaTarefas[index].titulo = novoTitulo.value
            localStorage.setItem('bancoTarefas', JSON.stringify(listaTarefas))
            mostrarTarefas(areaTarefa, listaTarefas)
        }
    })
}

export function mudarStatusTarefa(element, checkbox, listaTarefas, areaTarefa){
    if(checkbox.checked){
        element.concluida = true
    }else{
        element.concluida = false
    }
    localStorage.setItem('bancoTarefas', JSON.stringify(listaTarefas))
    mostrarTarefas(areaTarefa, listaTarefas)
}
