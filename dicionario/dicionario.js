let formulario = document.querySelector(".js-formulario");
let resultado = document.querySelector(".js-resultado");
let carregamento = document.querySelector(".js-carregamento");
let resultadoTitulo = document.querySelector(".js-resultado_titulo");
let resultadoDescricao = document.querySelector(".js-resultado_descricao");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    resultado.classList.remove("display-none");
    carregamento.classList.remove("display-none");

    let palavra = evento.target[0].value;
    let url = `https://api.dicionario-aberto.net/word/${palavra}`;

    fetch(url)
        .then((resposta) => resposta.json())
        .then((resposta) => {
            if(!resposta[0]) {
                resultadoTitulo.textContent = "Palavra não encontrada, verifique a grafia e tente novamente!";
                resultadoDescricao.textContent = "";
                return;
            } 

            let funcaoDeParseamento, elementoParseado;
            funcaoDeParseamento = new DOWParser();
            elementoParseado = funcaoDeParseamento.parseFromString(resposta[0].xml, "text/xml");
            
            resultadoTitulo.textContent = elementoParseado.getElementByTagName("form")[0].getElementByTagName("orth")[0].textContent;
            resultadoDescricao.textContent = elementoParseado.getElementByTagName("sense")[0].getElementByTagName("def")[0].textContent;
        })
        .finally(() => {
            carregamento.classList.add("display-none");
        });
});