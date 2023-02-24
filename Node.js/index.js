const express = require('express')
const server = express()
server.use(express.json()) //Para o express entender o formato JSON

//Query params = ?nome=Node.js
//Route params = /users/1
//Request body = { nome: "Node.js", tipo: "Back-end"}
//CRUD - Create, Read, Update, Delete

const cursos = ['Node.js', 'React', 'React Native'];

//Middleware global
server.use((req, res, next) => {
    console.log(`URL CHAMADA: ${req.url}`)
    return next(); //Para continuar a execução
})

server.get('/cursos', (req, res) => {
    return res.json(cursos);
})

//localhost:3000/curso
server.get('/cursos/:index', (req, res) => {
    const { index } = req.params;
    return res.json(cursos[index]);
})

//Criando um novo curso
server.post('/cursos', (req, res) => {
    const { nome } = req.body;
    cursos.push(nome);
    return res.json(cursos);
})

//Atualizando um curso
server.put('/cursos/:index', (req, res) => {
    const { index } = req.params;
    const { nome } = req.body;
    cursos[index] = nome;
    return res.json(cursos);
})

//Excluindo um curso
server.delete('/cursos/:index', (req, res) => {
    const { index } = req.params;
    cursos.splice(index, 1);
    return res.json({ cursos });
})

server.listen(3000)