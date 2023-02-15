//Spread Operator

// let primeiros = [1, 2, 3];
// let numeros = [...primeiros, 4, 5, 10];

// console.log(numeros);

// let pessoa = {
//     nome: 'João',
//     idade: 20,
//     cargo: 'Desenvolvedor',
// };

// let novaPessoa = {
//     ...pessoa,
//     status: 'Ativo',
//     cisdade: 'São Paulo/SP',
// };

// console.log(novaPessoa);

function novoUsuario(info)
{
    let dados = {
        ...info,
        status: 'Ativo',
        inicio: "01/01/2020",
        codigo: '123456'
    };

    console.log(dados);
}

novoUsuario({Nome: 'João', Idade: 20, Cargo: 'Desenvolvedor'})