//Find = Buscar alguma coisa
let listagem = [5, 9, "Maria Alice", 14, "Ana Carolina"];

let busca = listagem.find((item) => {
    if(item === "Maria Alice"){
        return item;
    }

    else{
        return "Não encontrado";
    }
})

document.write("O resultado da busca foi: " + busca);