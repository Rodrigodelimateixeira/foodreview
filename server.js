import express  from "express";

const server = express();
server.listen(3000, console.log("servidor rodando na porta 3000...."));
server.get('/', (req, res) => res.send("hello minha tropa!"));
server.get('/users', (req, res) => res.send("Página de usuários!"));