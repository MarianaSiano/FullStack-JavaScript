const express = require('express')
const server = express()

//Query params = ?nome=Node.js
//Route params = /users/1
//Request body = { nome: "Node.js", tipo: "Back-end"}

const cursos = ['Node.js', 'React', 'React Native'];

//localhost:3000/curso
server.get('/curso/:index', (req, res) => {
    const { index } = req.params;
    return res.json(cursos[index]);
})

server.listen(3000)