const KEY_BD = '@usuariosestudo'

var listaRegistros = {
    ultimoIdGerado:0,
    usuarios:[]
}

var FILTRO = ''

function gravarBD() {
    localStorage.setItem(KEY_BD, JSON.stringify(listaRegistros))
}

function lerBD() {
    const data = localStorage.getItem(KEY_BD)
        if(data){
            listaRegistros = JSON.parse(data)
        }
        rederinsar()
}

function pesquisar(value){
    FILTRO = value;
    rederinsar()
}

function rederinsar() {
    const tbody = document.getElementById('listaRegistroBody')

    if(tbody) {
        var data = listaRegistros.usuarios;
        if(FILTRO.trim()){
            const expReg = eval(`/${FILTRO.trim().replace(/[^\d\w]+/g,'.*')}/i`)
            data = data.filter( usuario => {
                return expReg.test( usuario.nome ) || expReg.test( usuario.fone )
            })
        }
        data = data
        .sort((a,b) => {
            a.nome < b.nome ? -1 : 1
        })
        .map(usuario => {
            return `<tr>
                <td>${usuario.id}</td>
                <td>${usuario.nome}</td>
                <td>${usuario.produto}</td>
                <td>${usuario.valor}</td>
                <td>
                    <button onclick="visualizar('cadastro', false, ${usuario.id})">Editar</button>
                    <button class="vermelho" onclick="perguntarSeDeleta(${usuario.id})">Deletar</button>
                </td>
            </tr>`
        })
        tbody.innerHTML = data.join('')
    }
}

function insert(nome, produto, valor){
    const id = listaRegistros.ultimoIdGerado + 1;

    listaRegistros.ultimoIdGerado = id;
    listaRegistros.usuarios.push({
        id, nome, produto, valor
    })
    gravarBD()
    rederinsar()
    visualizar('lista')
}

function edit(id, nome, produto, valor) {
    const usuario = listaRegistros.usuarios.find(usuario => usuario.id == id)

    usuario.nome = nome;
    usuario.produto = produto;
    usuario.valor = valor;
    gravarBD()
    rederinsar()
    visualizar('lista')    
}

function deleteUsuarios(id) {
    listaRegistros.usuarios = listaRegistros.usuarios.filter(usuario => {
        return usuario.id != id
    })
    gravarBD()
    rederinsar()
}

function perguntarSeDeleta(id){
    if(confirm('Quer deletar o registro de id '+id))
    deleteUsuarios(id)
}

function limparEdicao(){
    document.getElementById('nome').value = ''
    document.getElementById('produto').value = ''
    document.getElementById('valor').value = ''
}

function visualizar(pagina, novo=false, id=null) {
    document.body.setAttribute('page', pagina)

    if(pagina === 'cadastro'){
        if(novo) limparEdicao()
        if(id){
            const usuario = listaRegistros.usuarios.find(usuario => usuario.id == id)
            document.getElementById('id').value = usuario.id
            document.getElementById('nome').value = usuario.nome
            document.getElementById('produto').value = usuario.produto
            document.getElementById('valor').value = usuario.valor
        }
        document.getElementById('nome').focus()
    }
}

function submeter(e){
    e.preventDefault()
    const data = {
        id: document.getElementById('id').value,
        nome: document.getElementById('nome').value,
        produto: document.getElementById('produto').value,
        valor: document.getElementById('valor').value
    }
    if(data.id) {
        edit(data.id, data.nome, data.produto, data.valor)
    } else {
        insert(data.nome, data.produto, data.valor)
    }
}

window.addEventListener('load', () => {
    lerBD()

    document.getElementById('cadastroRegistro').addEventListener('submit', submeter)
    document.getElementById('inputPesquisa').addEventListener('keyup', e => {
        pesquisar(e.target.value)
    })
})