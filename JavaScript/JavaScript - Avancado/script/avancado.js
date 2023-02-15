//Template string
let nome = 'João';
let sobrenome = 'Silva';
let idade = 30;

//let mensagem = "Olá, " + nome + " " + sobrenome + ", você tem " + idade + " anos.

let mensagem = `Olá, ${nome} ${sobrenome}, você tem ${idade} anos.`;

document.write(mensagem);