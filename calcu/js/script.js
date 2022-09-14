function insert(num) {
    var numero = document.querySelector("#previous-operation").innerHTML;
    document.querySelector("#previous-operation").innerHTML = numero + num;
}

function clean(){
    document.querySelector("#previous-operation").innerHTML = "";
    document.querySelector("#current-operation").innerHTML = "";
}

function back() {
    var resultado = document.querySelector("#previous-operation").innerHTML;
    document.querySelector("#previous-operation").innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
    var resultado = document.querySelector("#previous-operation").innerHTML;

    if(resultado){
        document.querySelector("#current-operation").innerHTML = eval(resultado);
    } else{
        document.querySelector("#current-operation").innerHTML = "Digite um número!";
    }
}