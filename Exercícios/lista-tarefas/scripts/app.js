import { Tarefa, adicionarTarefa } from "./tarefas.js";

let campoTarefa = document.getElementById('icampoTarefa')
let btnTarefa = document.getElementById('btn-tarefa')
let areaTarefa = document.getElementById('lista-tarefas')

let agora = new Date()
let agoraBr = agora.toLocaleDateString('pt-BR')

let listaTarefas = JSON.parse(localStorage.getItem('bancoTarefas')) || []

btnTarefa.addEventListener('click', () => adicionarTarefa(campoTarefa.value, agoraBr, listaTarefas, areaTarefa))
campoTarefa.addEventListener('keypress', (event) => {
    if(event.key == 'Enter'){
        adicionarTarefa(campoTarefa.value, agoraBr, listaTarefas, areaTarefa)
    }
})