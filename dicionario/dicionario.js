let url = 'https://significado.herokuapp.com/v2/';

let inputTxt = document.querySelector('#container__inputtxt');
let btnTxt = document.querySelector('#container__btn');
let resultado = document.querySelector('#container__resultado');

btnTxt.addEventListener('click', () => {
    let palavra = inputTxt.value;
    
    if(palavra === ''){
        resultado.innerHTML = `<p id="container__significado"><span>Escreva uma palavra no campo de busca!</span></p>`
    } else {
        fetch(`${url}${palavra}`)
        .then((resposta) => resposta.json())
        .then((data) => { console.log(data) 
            resultado.innerHTML = `<h3 id="container__palavra">${palavra}</h3>
            <p id="container__significado"><span>1°</span>${data[0].meanings[0]}</p>
            <p id="container__significado"><span>2°</span>${data[0].meanings[1]}</p>
            <p id="container__significado"><span>3°</span>${data[0].meanings[2]}</p>`
            }).catch(() => {
                resultado.innerHTML = `<p id="container__significado"><span>Não foi possível encontrar essa palavra!</span></p>`
            })
        }
    })
