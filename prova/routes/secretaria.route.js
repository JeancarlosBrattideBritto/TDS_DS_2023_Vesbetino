const express = require("express");
const { buscaTodos, vincularProfessoresAlunos } = require("../controller/secretaria.controller")
const routes = new express.Router();
routes.get("/", buscaTodos);
routes.post("/turma", vincularProfessoresAlunos);
module.exports = routes;