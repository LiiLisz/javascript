var dados = []

function populaTabela() {
    if(Array.isArray(dados)){

        localStorage.setItem("__dados__", JSON.stringify(dados))

        $("#tblDados tbody").html("")

        dados.forEach(function(item){
            $("#tblDados tbody").append(`<tr>
            <td>${item.ID}</td>
            <td>${item.NomeCompleto}</td>
            <td>${item.Telefone}</td>
            <td>${item.Produto}</td>
            <td>${item.Valor}</td>
            </tr>`)
        })
    }
}

$(function () {
    dados = JSON.parse(localStorage.getItem("__dados__"))

    if(dados) {
        populaTabela()
    }

    $("#btn-salvar").click(function() {
   
        let NomeCompleto = $("#txtNome").val()
        let Telefone = $("#telefone").val()
        let Produto = $("#txtProduto").val()
        let Valor = $("#valor").val()

        let registro = {}

        registro.NomeCompleto = NomeCompleto
        registro.Telefone = Telefone
        registro.Produto = Produto
        registro.Valor = Valor

        registro.ID = dados.length + 1

        dados.push(registro)

        alert("Registro salvo com sucesso!")
        $("#modalRegistro").modal("hide")

        $("#txtNome").val("")
        $("#telefone").val("")
        $("#txtProduto").val("")
        $("#valor").val("")

        populaTabela()
    }) 
})