export function listarDados(areaTarefa, listaTarefas){
    areaTarefa.innerHTML = `` 
    areaTarefa.style.display = 'block'
    if(listaTarefas.length == 0){
        areaTarefa.innerHTML = `Nenhuma tarefa cadastrada`
    } else{
        listaTarefas.forEach(element =>{
            if(element.concluida){
                areaTarefa.innerHTML += `
                    <div id="tarefa">
                        <p>${element.id} ${element.titulo} <mark class="badge-${element.concluida}">Concluída</mark> ${element.dataCriacao}</p>
                    </div>
                ` 
            }else{
                areaTarefa.innerHTML += `
                    <div id="tarefa">
                        <p>${element.id} ${element.titulo} <mark class="badge-${element.concluida}">Em andamento</mark> ${element.dataCriacao}</p>
                    </div>
                `
            }
        })
    }
}