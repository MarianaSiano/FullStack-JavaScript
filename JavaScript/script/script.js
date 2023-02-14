//Switch

function pedir()
{
    //var valor = prompt("Digite um valor entre 1 e 4");
    var nome = prompt("Digite seu nome");

    /*
    switch(Number(valor)){
        case 1:
            alert("Você escolheu suco");
            break;

        case 2:
            alert("Você escolheu agua gelada");
            break;

        case 3:
            alert("Você escolheu sorvete");
            break;

        case 4:
            alert("Você escolheu chamar o garçom");
            break;

        default:
            alert("Valor inválido! Tente novamente!");
    }
    */

    switch(nome)
    {
        case 'Matheus':
            alert("Olá Matheus");
            break;
        
        case 'João':
            alert("Olá João");
            break;
        
        case 'Maria':
            alert("Olá Maria");
            break;
        
        default:
            alert("Olá desconhecido");
            break;
    }
}