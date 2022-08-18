const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const caracteres = [
    'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'summer',
    'meeseeks',
    'scroopy',
];

/* const createCard = () => {

    const card = document.createElement('div');
    const front = document.createElement('div');
    const back = document.createElement('div');

    card.className = 'card';
    front.className = 'face front';
    back.className = 'face back';

    card.appendChild(front);
    card.appendChild(back);

    grid.appendChild(card);

} */

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');

    if(disabledCards.length == 20) {
        clearInterval(this.loop);
        alert(`Parabéns ${spanPlayer.innerHTML}! Seu tempo foi: ${timer.innerHTML}.`);
    }
}

const checkCard = () => {
    const firstCaracter = firstCard.getAttribute('data-caracter');
    const secondCaracter = secondCard.getAttribute('data-caracter');

    if(firstCaracter == secondCaracter) {
        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        firstCard = '';
        secondCard = '';

        checkEndGame();

    } else {
        setTimeout(() => {
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            firstCard = '';
            secondCard = '';

        }, 500);
    }
}

const revealCard = ({target}) => {
    if (target.parentNode.className.includes('reveal-card')) { 
        return;
    }

    if (firstCard == '') {
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;

    } else if (secondCard == ''){
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCard();
    }
}

const createCard = (caracter) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../imagens/${caracter}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-caracter', caracter); // criar e ver se sao meus personagens

    return card;
}

const loadGame = () => {
    const duplicateCaracteres = [... caracteres, ... caracteres]; // espalhar e duplicar

    const shuffledArray = duplicateCaracteres.sort(() => Math.random() - 0.5); //embaralhar e colocar aleatorio

    shuffledArray.forEach((caracter) => {
        const card = createCard(caracter);
        grid.appendChild(card);
    });
}

const startTimer = () => {
    this.loop = setInterval(() => {
        const currentTime = +timer.innerHTML;
        timer.innerHTML = currentTime + 1;
    }, 1000);
}

window.onload = () => {
    const playerName = localStorage.getItem('player');

    spanPlayer.innerHTML = playerName;
    startTimer();
    loadGame();
}
