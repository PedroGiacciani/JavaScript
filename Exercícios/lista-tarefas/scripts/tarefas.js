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