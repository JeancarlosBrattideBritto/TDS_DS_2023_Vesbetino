const express = require("express");
const {loginUsuario,pesquisa} = require("../controllerr/usuario.controller");
const route = new express.Router();
route.get("/",loginUsuario);
route.post("/",pesquisa);
module.exports = route;