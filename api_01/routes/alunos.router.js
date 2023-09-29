const express = require("express");
const { lestaAlunos } = require("../controllerr/alunos.controller");
const routes = express.Router();
routes.get("/",lestaAlunos);
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