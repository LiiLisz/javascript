const calcular = document.getElementById('calcular');

function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso / (altura * altura)).toFixed(1);
        
        let classifica = "";

        if (valorIMC < 18.5) {
            classifica = 'abaixo do peso.';
        } else if (valorIMC < 25) {
            classifica = 'com peso ideal. Parabéns!!';
        } else if (valorIMC < 30) {
            classifica = 'levemente acima do peso.';
        } else if (valorIMC < 35) {
            classifica = 'com obesidade grau I.';
        } else if (valorIMC < 40) {
            classifica = 'com obesidade grau II.';
        } else {
            classifica = 'com obesidade grau III. Cuidado!!';
        }
        
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classifica}`;

    } else {
        resultado.textContent = 'Preencha todos os campos por favor!!'
    }
}

calcular.addEventListener('click', imc);
