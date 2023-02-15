let pessoa = {
    nome: 'João',
    sobrenome: 'da Silva',
    empresa: 'Google',
    cargo: 'Analista de Sistemas',
};

// let nome = "Maria";

// const {nome:nomePessoa, cargo, empresa, sobrenome} = pessoa;

//==========================================================

//Desconstruir um array
let nomes = ["João", "Maria", "José"];

// let { 0:joão} = nomes
// document.write(joão);

let [primeironome, segundonome] = nomes;
document.write(primeironome);
document.write(", ");
document.write(segundonome);