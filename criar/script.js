//Seleção de Elementos
const generatePasswordButton = document.querySelector('#generate-password');
const generatedPasswordElement = document.querySelector('#generated-password');

const nome = document.getElementById('name');
const email = document.getElementById('email');
const senha = document.getElementById('password');
const confirmacao = document.getElementById('confirmpassword');
   

//Funções
const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 27);  //letras minusculas aleatorias
};

const getLetterUperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65); //letras maiusculas aleatorias
};

const getNumber = () => {
    return Math.floor(Math.random()* 10).toString();
};

const getSymbol = () => {
    const sybomls = "?/@#!&<>%$.-_*+";
    return sybomls[(Math.random() * sybomls.length)];
}

const generatePassword = (getLetterLowerCase, getLetterUperCase, getNumber, getSymbol) => {
    let password = ""

    const passwordLength = 10
    
    const generators = [getLetterLowerCase, 
        getLetterUperCase, 
        getNumber, 
        getSymbol,
    ];

    for (i = 0; i < passwordLength; i = i + 4) {
        generators.forEach(() => {
            const randomValue = generators[Math.floor(Math.random() * generators.length)]();

            password += randomValue;
        });
    }
    password = password.slice(0, passwordLength);

    generatedPasswordElement.style.display = "block";
    generatedPasswordElement.querySelector("h4").innerText = password;
};

//Eventos
generatePasswordButton.addEventListener("click", () => {
    generatePassword (getLetterLowerCase, getLetterUperCase, getNumber, getSymbol);
});

