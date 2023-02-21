//Funções Anônimas

let subtrair = (valor1, valor2) => {
    let total = valor1 - valor2;
    document.write("Total da suntracao: " + total);
}

subtrair(35, 14);

document.write("<br>");
document.write("<br>");

let numeros = [15, 21, 1, 32]

numeros.map((item) => {
    document.write(item);
    document.write("<br>");
})