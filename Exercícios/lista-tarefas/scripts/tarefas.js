export class Tarefa{
    constructor(id, titulo, concluida, dataCriacao){
        this.id = id
        this.titulo = titulo
        this.concluida = concluida
        this.dataCriacao = dataCriacao
    }
}

export function adicionarTarefa(titulo, dataCriacao, listaTarefas, areaTarefa){
    const tarefa = new Tarefa(Math.floor(Math.random() * 1111), titulo, false, dataCriacao)
    listaTarefas.push(tarefa)
    localStorage.setItem('bancoTarefas', JSON.stringify(listaTarefas))
    areaTarefa.innerHTML += `<p>${tarefa.id} ${tarefa.titulo} ${tarefa.concluida} ${tarefa.dataCriacao} <button><i class="fa-solid fa-pencil"></i></button><button><i class="fa-solid fa-trash"></i></button></p>`
}