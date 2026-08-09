import { Tarefa } from "./tarefas.js";

let novaTarefa = document.getElementById('itarefa')
let btnTarefa = document.getElementById('btn-tarefa')
let campoTarefas = document.getElementById('lista-tarefas')
let agora = new Date()
let agoraBr = agora.toLocaleDateString('pt-BR')
let listaTarefas = JSON.parse(localStorage.getItem('bancoTarefas')) || []
let id = 0

btnTarefa.addEventListener('click', () => {
    const tarefa = new Tarefa(Math.floor(Math.random() * 11111), novaTarefa.value, false, agoraBr)
    listaTarefas.push(tarefa)
    localStorage.setItem('bancoTarefas', JSON.stringify(listaTarefas))
})

campoTarefas.innerHTML += `<p>${listaTarefas}</p>`