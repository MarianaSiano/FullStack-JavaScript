//Find = Buscar alguma coisa
let listagem = [5, 9, "Maria Alice", 14, "Ana Carolina"];

let busca = listagem.find((item) => {
    return item === "Maria Alice";
})

document.write("O resultado da busca foi: " + busca);