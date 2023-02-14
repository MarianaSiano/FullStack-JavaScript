//Dados imc

/*
- Abaixo de 17 - Muito abaixo do peso
- Entre 17 e 18,49 - Abaixo do peso
- Entre 18,5 e 24,99 - Peso normal
- Entre 25 e 29,99 - Acima do peso
*/

//peso / (altura * altura)

var resultado;
var peso;
var altura;
var imc;

function calcular(event)
{
    event.preventDefault();

    peso = document.getElementById("peso").value;
    altura = document.getElementById("altura").value;
    imc = peso / (altura * altura);

    resultado = document.getElementById("resultado");

    if(imc < 17) {
        resultado.innerHTML = "Seu resultado é: Muito abaixo do peso. <br> Valor de: " + imc.toFixed(2);
    }

    else if(imc >= 17 && imc <= 18.49) {
        resultado.innerHTML = "Seu resultado é: Abaixo do peso. <br> Valor de: " + imc.toFixed(2);
    }

    else if(imc >= 18.5 && imc <= 24.99) {
        resultado.innerHTML = "Seu resultado é: Peso normal. <br> Valor de: " + imc.toFixed(2);
    }

    else if(imc >= 25 && imc <= 29.99) {
        resultado.innerHTML = "Seu resultado é: Acima do peso. <br> Valor de: " + imc.toFixed(2);
    }

    else {
        resultado.innerHTML = "Seu resultado é: Obesidade. <br> Valor de: " + imc.toFixed(2);
    }

    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
}