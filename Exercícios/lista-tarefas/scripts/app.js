import { Tarefa } from "./tarefas.js";

let novaTarefa = document.getElementById('itarefa')
let btnTarefa = document.getElementById('btn-tarefa')
let campoTarefas = document.getElementById('lista-tarefas')
let agora = new Date()
let agoraBr = agora.toLocaleDateString('pt-BR')
let listaTarefas = JSON.parse(localStorage.getItem('bancoTarefas')) || []

btnTarefa.addEventListener('click', () => {
    let id = 0
    const tarefa = new Tarefa(id + 1, novaTarefa.value, false, agoraBr)
    listaTarefas.push(tarefa)
    localStorage.setItem('bancoTarefas', JSON.stringify(listaTarefas))
})

campoTarefas.innerHTML += `<p>${listaTarefas}</p>`