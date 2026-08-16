import { editarTarefa, mudarStatusTarefa, listarDados } from "./eventos.js"

export class Tarefa{
    constructor(id, titulo, concluida, dataCriacao){
        this.id = id
        this.titulo = titulo
        this.concluida = concluida
        this.dataCriacao = dataCriacao
    }
}

export function adicionarTarefa(titulo, dataCriacao, listaTarefas, areaTarefa, filtro){
    filtro.value = "Todas"
    if(titulo.length == 0){
        alert("Digite um título para sua tarefa")
    } else{
        const tarefa = new Tarefa(Math.floor(Math.random() * 1111), titulo, false, dataCriacao)
        listaTarefas.push(tarefa)
        localStorage.setItem('bancoTarefas', JSON.stringify(listaTarefas))
    }
}


export function mostrarTarefas(areaTarefa, listaTarefas, concluidas){
    areaTarefa.innerHTML = `` 
    listaTarefas.forEach(element =>{
        const cardTarefa = document.createElement('div')
        const check = document.createElement('input')
        const id = document.createElement('p')
        const titulo = document.createElement('p')
        const status = document.createElement('p')
        const mark = document.createElement('mark')
        const data = document.createElement('p')
        const lixeira = document.createElement('i')
        
        status.appendChild(mark)
        cardTarefa.appendChild(check)
        cardTarefa.appendChild(id)
        cardTarefa.appendChild(titulo)
        cardTarefa.appendChild(status)
        cardTarefa.appendChild(data)
        cardTarefa.appendChild(lixeira)
        
        cardTarefa.classList.add('tarefa')
        mark.classList.add(`badge-${element.concluida}`)
        titulo.classList.add('nome-tarefa')
        lixeira.classList.add('fa-solid')
        lixeira.classList.add('fa-trash')
        check.type = 'checkbox'

        id.textContent = `${element.id}`
        titulo.textContent = `${element.titulo}`
        data.textContent = `${element.dataCriacao}`
    
        if(element.concluida){
            mark.textContent = 'Concluida'
            check.checked = true
        }else{
            mark.textContent = 'Em andamento'
            check.checked = false
        }

        areaTarefa.appendChild(cardTarefa)
        let index = listaTarefas.indexOf(element)
        let nomeTarefa = document.getElementsByClassName('nome-tarefa')
        nomeTarefa[index].addEventListener('dblclick', () => editarTarefa(nomeTarefa[index], index, areaTarefa, listaTarefas))

        check.addEventListener('change', () => mudarStatusTarefa(element, check, listaTarefas, areaTarefa))

        lixeira.addEventListener('click', () => excluirTarefa(areaTarefa, listaTarefas, index, concluidas))
    })
}

function excluirTarefa(areaTarefa, listaTarefas, index, concluidas){
    listaTarefas.splice(index, 1)
    localStorage.setItem('bancoTarefas', JSON.stringify(listaTarefas))
    listarDados(areaTarefa, listaTarefas, concluidas)
}