import { adicionarTarefa, mostrarTarefas } from "./tarefas.js";
import { filtrarTarefas, pesquisarTarefa } from "./eventos.js";

let campoTarefa = document.getElementById('icampoTarefa')
let btnTarefa = document.getElementById('btn-tarefa')
let areaTarefa = document.getElementById('lista-tarefas')

let agora = new Date()
let agoraBr = agora.toLocaleDateString('pt-BR')

let listaTarefas = JSON.parse(localStorage.getItem('bancoTarefas')) || []

let filtro = document.getElementById('ifiltro')

let pesquisaTarefa = document.getElementById('ipesquisaTarefa')



btnTarefa.addEventListener('click', () => {
    adicionarTarefa(campoTarefa.value, agoraBr, listaTarefas, filtro)
    campoTarefa.value = ``
    campoTarefa.focus()
    mostrarTarefas(areaTarefa, listaTarefas) 
})

campoTarefa.addEventListener('keypress', (event) => {
    if(event.key == 'Enter'){
        adicionarTarefa(campoTarefa.value, agoraBr, listaTarefas, filtro)
        campoTarefa.value = ``
        campoTarefa.focus()
        mostrarTarefas(areaTarefa, listaTarefas)
    }
})

document.addEventListener('DOMContentLoaded', () => {
    mostrarTarefas(areaTarefa, listaTarefas)
})

filtro.addEventListener('change', () => filtrarTarefas(areaTarefa, listaTarefas, filtro))

pesquisaTarefa.addEventListener('input', () => pesquisarTarefa(areaTarefa, listaTarefas, pesquisaTarefa.value))
