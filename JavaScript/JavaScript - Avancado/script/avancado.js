//map = percorrer um array

// let lista = ["Giovani", "Quezia", "Mateus", "João", "Pedro"];

// lista.map((item, index) => {
//     console.log(`Passando: ${item} - Esta na posição: ${index} `);
//     document.write(`- Passando: ${item} - Esta na posição: ${index} <br>`);
// })

//Reduce = reduzir um array
let numeros = [25, 20, 21];

let total = numeros.reduce((acumulador, numero, indice) => {
    console.log(`Indice: ${indice} - Numero: ${numero} - Acumulador: ${acumulador}`);
    return acumulador + numero;
}, 0);

document.write(`Total: ${total}`);