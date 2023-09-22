const express = require("express");

const route = new express.Router();

route.post("/parametros", (request, response) => {

    const valor1 = request.body.valor1;
    const valor2 = request.body.valor2;
    const resultado = valor1 + valor2;
    if(!valor){
        response.status(500).send("O parametro valor1 nao foi informado")
    }else if (!valor){
        response.status(500).send("O parametro valor2 nao foi informado!")
    }
    response.send(`O resultado é ${resultado}`);

})
 
module.exports = route;
