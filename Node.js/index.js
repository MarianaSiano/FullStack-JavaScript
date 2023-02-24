const express = require('express')
const server = express()

//Query params = ?nome=Node.js
//Route params = /users/1
//Request body = { nome: "Node.js", tipo: "Back-end"}

//localhost:3000/curso
server.get('/curso/:id', (req, res) => {
    const nome = req.query.nome;
    return res.json({ curso: `Aprendendo ${nome}` });
})

server.listen(3000)