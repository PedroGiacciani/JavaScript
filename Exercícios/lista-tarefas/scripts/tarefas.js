import { editarTarefa, mudarStatusTarefa } from "./eventos.js"

class Tarefa{
    constructor(id, titulo, concluida, dataCriacao){
        this.id = id
        this.titulo = titulo
        this.concluida = concluida
        this.dataCriacao = dataCriacao
    }
}

export function adicionarTarefa(titulo, dataCriacao, listaTarefas, filtro){
    filtro.value = "Todas"
    let regex1 = /^.{3,30}$/
    let regex2 = /^[\w.-]/
    if(titulo.length == 0){
        alert("Digite um título para sua tarefa")
    }else if(!regex1.test(titulo) || !regex2.test(titulo)){
        alert("Sua tarefa precisa ter entre 3 e 30 caracteres e não pode começar com espaço ou caractéres especiais!!!")
    }else{
        const tarefa = new Tarefa(Math.floor(Math.random() * 1111), titulo, false, dataCriacao)
        listaTarefas.push(tarefa)
        localStorage.setItem('bancoTarefas', JSON.stringify(listaTarefas))
    }
}

export function mostrarTarefas(areaTarefa, listaTarefas){
    areaTarefa.innerHTML = ``
    if(listaTarefas.length == 0){
        areaTarefa.innerHTML = `Nenhuma tarefa cadastrada`
    } else{
        listaTarefas.forEach(element =>{
            const cardTarefa = document.createElement('div')
            const check = document.createElement('input')
            const titulo = document.createElement('p')
            const status = document.createElement('p')
            const mark = document.createElement('mark')
            const data = document.createElement('p')
            
            
            status.appendChild(mark)
            cardTarefa.appendChild(check)
            cardTarefa.appendChild(titulo)
            cardTarefa.appendChild(status)
            cardTarefa.appendChild(data)
            
            cardTarefa.classList.add('tarefa')
            mark.classList.add(`badge-${element.concluida}`)
            titulo.classList.add('nome-tarefa')
            check.type = 'checkbox'
            
            titulo.textContent = `${element.titulo}`
            data.textContent = `${element.dataCriacao}`
            
            if(element.concluida){
                mark.textContent = 'Concluida'
                check.checked = true
            }else{
                mark.textContent = 'Em andamento'
                check.checked = false
            }

            let menu = document.createElement('dialog')
            document.body.appendChild(menu)

            let excluir = document.createElement('p')
            excluir.textContent = `Excluir tarefa`
            let editar = document.createElement('p')
            editar.textContent = `Editar tarefa`

            const lixeira = document.createElement('i')
            lixeira.classList.add('fa-solid')
            lixeira.classList.add('fa-trash')

            const lapis = document.createElement('i')
            lapis.classList.add('fa-solid')
            lapis.classList.add('fa-pencil')

            excluir.appendChild(lixeira)
            editar.appendChild(lapis)
            menu.appendChild(excluir)
            menu.appendChild(editar)

            areaTarefa.appendChild(cardTarefa)
            let index = listaTarefas.indexOf(element)
            let nomeTarefa = document.getElementsByClassName('nome-tarefa')
            nomeTarefa[index].addEventListener('dblclick', () => editarTarefa(nomeTarefa[index], index, areaTarefa, listaTarefas))

            cardTarefa.addEventListener('contextmenu', (event) => {
                event.preventDefault()
                menu.style.top = `${event.clientY}px`
                if(event.clientX/window.innerWidth * 100 > 70){
                    menu.style.left = `${event.clientX - 150}px`
                }else{
                    menu.style.left = `${event.clientX}px`
                }
                menu.show()
            })

            excluir.addEventListener('click', () => excluirTarefa(areaTarefa, listaTarefas, index))
            editar.addEventListener('click', () => editarTarefa(nomeTarefa[index], index, areaTarefa, listaTarefas))
            menu.addEventListener('mouseleave', () => menu.close())

            check.addEventListener('change', () => mudarStatusTarefa(element, check, listaTarefas, areaTarefa))
        })
    }
    atualizar(listaTarefas)
}

function excluirTarefa(areaTarefa, listaTarefas, index){
    listaTarefas.splice(index, 1)
    localStorage.setItem('bancoTarefas', JSON.stringify(listaTarefas))
    mostrarTarefas(areaTarefa, listaTarefas)
}

function atualizar(listaTarefas){
    let concluidas = document.getElementById('tarefas-concluidas')
    let tarefasConcluidas = listaTarefas.filter(element => element.concluida == true)
    console.log(listaTarefas)
    if(listaTarefas.length == 0){
        concluidas.innerHTML = `Tarefas concluidas: 0 / 0`
    }else{
        concluidas.innerHTML = `Tarefas concluidas: ${tarefasConcluidas.length} / ${listaTarefas.length}`
    }
}