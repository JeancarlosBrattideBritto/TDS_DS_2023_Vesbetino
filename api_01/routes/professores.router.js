const express = require("express");

const routes = new express.Router();

routes.get("/", (request, response) => {
    response.send("profesores");
});

module.exports = routes;