const form = document.getElementById('form')
const nome = document.getElementById('nome')
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const confirmacao = document.getElementById('confirmacao')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
});

function checkInputs() {
    const nomeValue = nome.value.trim()
    const emailValue = email.value.trim()
    const senhaValue = senha.value.trim()
    const confirmacaoValue = confirmacao.value.trim()

    if (nomeValue === '') {
        setErrorFor(nome, 'O nome de usuário é obrigatório.')
    } else {
        setSuccessFor(nome)
    }

    if (emailValue === '') {
        setErrorFor(email, 'O email é obrigatório.')
    } else {
        setSuccessFor(email)
    }

    if (senhaValue === '') {
        setErrorFor(senha, 'A senha é obrigatória.')
    } else if (senhaValue.length < 8) {
        setErrorFor(senha, 'A senha tem que ter no mínimo 8 caracteres.')
    } else {
        setSuccessFor(senha)
    }
    
    if (confirmacaoValue === '') {
        setErrorFor(confirmacao, 'A confirmação da senha é obrigatória.')
    } else if (confirmacaoValue !== senhaValue) {
        setErrorFor(confirmacao, 'A senhas não conferem.')
    } else {
        setSuccessFor(confirmacao)
    }

    const formControls = form.querySelectorAll(".form-control")
    
    const formIsValid = [...formControls].every((formControl) => {
        return (formControl.className === "form-control success")
    });

    if (formIsValid) {
        console.log("O formulário está 100% válido!");
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message

    formControl.className = "form-control error"
}

function setSuccessFor(input) {
    event.preventDefault();
    const formControl = input.parentElement;
    
    formControl.className = "form-control success"
}

