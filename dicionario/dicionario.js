let formulario = document.querySelector(".js-formulario");
let resultado = document.querySelector(".js-resultado");
let carregamento = document.querySelector(".js-carregamento");
let resultadoTitulo = document.querySelector(".js-resultado_titulo");
let resultadoDescricao =document.querySelector(".js-resultado_descricao");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    resultado.classList.remove("display-none");
    carregamento.classList.remove("display-none");

    let palavra = e.target[0].value;
    let url = `https://api.dicionario-aberto.net/word/${palavra}`;

    fetch(url)
        .then((resposta) => resposta.json())
        .then((resposta) => {
            if(!resposta[0]) {
                resultadoTitulo.textContent = "Palavra não encontrada, verifique a grafia e tente novamente!";
            } else {
                resultadoTitulo.textContent = "Resposta encontrada";
                
            }
        })
        .finally(() => {
            carregamento.classList.add("display-none");
        });
});