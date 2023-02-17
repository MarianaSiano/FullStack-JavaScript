//map = percorrer um array

let lista = ["Giovani", "Quezia", "Mateus", "João", "Pedro"];

lista.map((item, index) => {
    console.log(`Passando: ${item} - Esta na posição: ${index} `);
    document.write(`- Passando: ${item} - Esta na posição: ${index} <br>`);
})