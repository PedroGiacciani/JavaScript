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
                        <p>${element.id} ${element.titulo} <mark>Concluída</mark> ${element.dataCriacao}</p>
                    </div>
                ` 
                let mark = document.querySelector('mark')
                mark.classList.add('concluida')
            }else{
                areaTarefa.innerHTML += `
                    <div id="tarefa">
                        <p>${element.id} ${element.titulo} <mark class="marca">Em andamento</mark> ${element.dataCriacao}</p>
                    </div>
                ` 
                let mark = document.getElementsByClassName('marca')
                mark.classList.add('incompleta')
            }
        })
    }
}