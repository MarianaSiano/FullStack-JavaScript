//Spread Operator

// let primeiros = [1, 2, 3];
// let numeros = [...primeiros, 4, 5, 10];

// console.log(numeros);

let pessoa = {
    nome: 'João',
    idade: 20,
    cargo: 'Desenvolvedor',
};

let novaPessoa = {
    ...pessoa,
    status: 'Ativo',
    cisdade: 'São Paulo/SP',
};

console.log(novaPessoa);