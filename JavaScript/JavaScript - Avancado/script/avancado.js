//includes, starWith e endsWith

//Includes
let nomes = ["Lavínia", "Ana", "Alexia"]
document.write(nomes.includes("Ana") + "<br>")
document.write(nomes.includes("Alícia") + "<br>")

document.write("<br>")

if(nomes.includes("Lavínia")){
    document.write("Lavínia está na lista de nomes" + "<br>")
}

else {
    document.write("Lavínia não está na lista de nomes" + "<br>")
}