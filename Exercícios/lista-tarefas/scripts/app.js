import { Tarefa, adicionarTarefa } from "./tarefas.js";
import { listarDados, filtrarTarefas, pesquisarTarefa, editarTarefa } from "./eventos.js";

let campoTarefa = document.getElementById('icampoTarefa')
let btnTarefa = document.getElementById('btn-tarefa')
let areaTarefa = document.getElementById('lista-tarefas')

let agora = new Date()
let agoraBr = agora.toLocaleDateString('pt-BR')

let listaTarefas = JSON.parse(localStorage.getItem('bancoTarefas')) || []

let filtro = document.getElementById('ifiltro')

let concluidas = document.getElementById('tarefas-concluidas')

let pesquisaTarefa = document.getElementById('ipesquisaTarefa')

let tarefa = document.getElementById('tarefa')

btnTarefa.addEventListener('click', () => {
    adicionarTarefa(campoTarefa.value, agoraBr, listaTarefas, areaTarefa, filtro)
    campoTarefa.value = ``
    campoTarefa.focus()
    listarDados(areaTarefa, listaTarefas)
})

campoTarefa.addEventListener('keypress', (event) => {
    if(event.key == 'Enter'){
        adicionarTarefa(campoTarefa.value, agoraBr, listaTarefas, areaTarefa, filtro)
        campoTarefa.value = ``
        campoTarefa.focus()
        listarDados(areaTarefa, listaTarefas)
    }
})

document.addEventListener('DOMContentLoaded', () => {
    listarDados(areaTarefa, listaTarefas)
    let tarefasConcluidas = listaTarefas.filter(element => element.concluidas == true)
    concluidas.innerHTML += `${tarefasConcluidas.length} / ${listaTarefas.length}` 
})

filtro.addEventListener('change', () => filtrarTarefas(areaTarefa, listaTarefas, filtro))

pesquisaTarefa.addEventListener('input', () => pesquisarTarefa(areaTarefa, listaTarefas, pesquisaTarefa.value))

tarefa.addEventListener('dblclick', () => editarTarefa(tarefa))