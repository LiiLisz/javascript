const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalId = null;

const traffic = (e) => {
    stopAutomatic();
    turnOn[e.target.id]();
    
}

const nextIndex = () => {
    if(colorIndex < 2) {
        colorIndex++
    } else {
        colorIndex =0;
    }
}

const changeColor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval(intervalId);
}

const turnOn = {
    'red': () => img.src = './image/vermelho.png',
    'yellow': () => img.src = './image/amarelo.png',
    'green': () => img.src = './image/verde.png',
    'automatic': () => intervalId = setInterval(changeColor, 1000)
}

buttons.addEventListener('click', traffic);