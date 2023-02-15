//Rest Operator

// function convidados(...nomes)
// {
//     console.log("Seja bem vindos!! Todos Convidados");
//     console.log(...nomes);

//     document.write("Seja bem vindos!! Todos Convidados");
//     document.write("<br>");
//     document.write(...nomes + "<br>");
// }

// convidados("João", "Maria", "José", "Pedro", "Ana", "Paulo");

function sorteador(...numeros)
{
    console.log("Sorteio de números");
    console.log(...numeros);

    document.write("Sorteio de números");
    document.write("<br>");
    document.write(...numeros + "<br>");

    const numeroGerado = Math.floor(Math.random() * numeros.length);
    console.log(numeros[numeroGerado]);

    document.write("Número sorteado: " + numeros[numeroGerado]);
}

sorteador(39, 20, 98, 46, 35, 42, 15, 53);