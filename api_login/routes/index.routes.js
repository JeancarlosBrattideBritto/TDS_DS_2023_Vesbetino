const express = require("express");
const usuario = require("./usuario.routes");

const routes = new express.Router();
routes.use("/usuario",usuario);

module.exports = routes;