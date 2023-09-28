const express = require("express");
const {soma, somaParemetros} = require("../controllerr/soma.controller");
const route = new express.Router();

route.get("/", soma);

route.post("/parametros", somaParemetros);
 
module.exports = route;
