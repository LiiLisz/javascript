let tarefa = document.getElementById('tarefa');
let btnAddTarefa = document.getElementById('btnAddTarefa');
let listaTarefas = document.getElementById('listaTarefas');

tarefa.addEventListener('keypress', (e) => {
    if(e.KeyCode == 13) {
        let novaTarefa = {
            nome: tarefa.value, 
            id: gerarId(),
        }
    }
    adicionarTarefa(novaTarefa);
});

btnAddTarefa.addEventListener('click', () => {
    
    let novaTarefa = {
        nome: tarefa.value, 
        id: gerarId(),
    }
    adicionarTarefa(novaTarefa);
});

function gerarId() {
    return Math.floor(Math.random() * 3000);
}

function adicionarTarefa(novaTarefa) {

    let li = criarTagLI(novaTarefa);
    listaTarefas.appendChild(li);
    tarefa.value = '';
}

function criarTagLI(novaTarefa) {
    let li = document.createElement('li');
    
    let span = document.createElement('span');
    span.classList.add('textoTarefa');
    span.innerHTML = novaTarefa.nome;

    let div = document.createElement('div');

    let btnEditar = document.createElement('button');
    btnEditar.classList.add('btnAcao');
    btnEditar.innerHTML = '<i class="fa fa-pencil"></i>';
    btnEditar.setAttribute('onclick', 'editar('+novaTarefa.id+')');

    let btnExcluir = document.createElement('button');
    btnExcluir.classList.add('btnAcao');
    btnExcluir.innerHTML = '<i class="fa fa-trash"></i>';
    btnExcluir.setAttribute('onclick', 'excluir('+novaTarefa.id+')');

    div.appendChild(btnEditar);
    div.appendChild(btnExcluir);

    li.appendChild(span);
    li.appendChild(div);
    return li;
}

function editar(idTarefa) {
    alert(idTarefa);
}

function excluir(idTarefa) {
    alert(idTarefa);
}