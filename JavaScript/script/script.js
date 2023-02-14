//Dados imc

/*
- Abaixo de 17 - Muito abaixo do peso
- Entre 17 e 18,49 - Abaixo do peso
- Entre 18,5 e 24,99 - Peso normal
- Entre 25 e 29,99 - Acima do peso
*/

//peso / (altura * altura)

function calcularIMC(event)
{
    event.preventDefault();

    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var resultado = document.getElementById("resultado");
    var imc = peso / (altura * altura);
    var mensagem = "";

    if(imc < 17) {
        mensagem = "Muito abaixo do peso";
        resultado.innerHTML = mensagem;
    }

    else if(imc >= 17 && imc <= 18.49) {
        mensagem = "Abaixo do peso";
        resultado.innerHTML = mensagem;
    }

    else if(imc >= 18.5 && imc <= 24.99) {
        mensagem = "Peso normal";
        resultado.innerHTML = mensagem;
    }

    else if(imc >= 25 && imc <= 29.99) {
        mensagem = "Acima do peso";
        resultado.innerHTML = mensagem;
    }

    else {
        mensagem = "Obesidade";
        resultado.innerHTML = mensagem;
    }
}