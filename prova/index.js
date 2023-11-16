const bodyParser = require('body-parser');
const express = require('express');
const routes = require("./routes/index.routes");

const app = new express();
app.listen(8080, () =>
    console.log("O servidor esta rodando na porta 8080!"));

    