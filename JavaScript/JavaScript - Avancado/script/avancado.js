//Rest Operator

function convidados(...nomes)
{
    console.log("Seja bem vindos!! Todos Convidados");
    console.log(...nomes);

    document.write("Seja bem vindos!! Todos Convidados");
    document.write("<br>");
    document.write(...nomes + "<br>");
}

convidados("João", "Maria", "José", "Pedro", "Ana", "Paulo");