function logar() {

    const login = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if(login == "" && senha == ""){
        alert("Login e senha são obrigatórios!")
    } else {
        location.href = "home.html";
    } 
} 

/*
fetch("https://swapi.dev/api/people/")
.then(response => response.json())
.then(data => {
    const lista = document.querySelector('list')

    data.map((item) => {
        const li = document.createElement('li');

        li.setAttribute('name', item.name);
        li.innerHTML = item.birth_year;
        lista.appendChild(li);
    });
});
*/

