const express = require("express");
const routes = express.Router();

routes.get("/alunos", (request, response) => {
    response.send("Alunos");
});
routes.get("/nota", (request, response) => {
    response.send("nota")
}); routes.get("/livro", (request, response) => {
    response.send("livro")
});
routes.get("/perfil", (request, response) => {
    response.send("perfil");
});



module.exports = routes;