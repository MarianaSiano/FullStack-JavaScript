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