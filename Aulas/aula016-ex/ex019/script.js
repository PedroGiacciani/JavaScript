var a = []

function adicionar(){
    a.push(Number(document.getElementById('inum').value))
    var op = document.createElement('option')
    var sel = document.getElementById('isel')
    var i = 0
    sel.appendChild(op)
    op.innerHTML += `Valor ${a}`
}