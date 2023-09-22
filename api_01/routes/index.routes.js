const express = require("express");
const alunosRoutes = require("./alunos.router");
const professoresRoutes = require("./professores.router");
const somaRoute = require("./soma.route");

const routes = new express.Router();

routes.use("/alunos", alunosRoutes);
routes.use("/profesores", professoresRoutes);
routes.use("/soma", somaRoute);
module.exports = routes;
