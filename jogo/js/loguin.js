const input = document.querySelector('.loguin_input');
const button = document.querySelector('.loguin_button');
const form = document.querySelector('.loguin-form');

validateInput = ({target}) => {
    if(target.value.length > 2) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '');
    }
}

const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('player', input.value);
    window.location = 'pages/game.html'
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);