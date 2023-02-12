//Aula 1 de funções com JavaScript
var area  = document.getElementById("area");

function entrar()
{
    var nome = prompt("Qual o seu nome?");

    if(nome === null || nome === "")
    {
        alert("Algo deu errado!");
        area.innerHTML = "Você não digitou seu nome!";
    }

    else
    {
        area.innerHTML = "Bem vindo, " + nome + " ";

        let botaoSair = document.createElement("button");
        botaoSair.innerText = "Sair";
        botaoSair.onclick = sair;

        area.appendChild(botaoSair);
    }
}

function sair()
{
    alert("Até mais!")
    area.innerHTML = "Você saiu do sistema!";
}

//Aula 2 de funções com JavaScript
var nota = document.getElementById("nota");

function mediaAluno(nota1, nota2)
{
    var nomeAluno = prompt("Qual o nome do aluno?");
    var nota1, nota2;

    nota1 = parseFloat(prompt("Digite a primeira nota do aluno "));
    nota2 = parseFloat(prompt("Digite a segunda nota do aluno "));
    var media = (nota1 + nota2) / 2;

    if(media >= 7) {
        document.write("Aprovado com a média " + media);
    }

    else {
        document.write("Reprovado com a média " + media);
    }

    return media;
}