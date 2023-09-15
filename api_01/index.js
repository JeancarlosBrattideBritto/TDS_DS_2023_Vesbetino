//chama biblioteca
const express = require('express');
//inicia a biblioteca
const app = new express();
app.get("/alunos", (request, response) => {
    response.send("Alunos");
})
app.get("/professores", (request, response) => {
    response.send("professores");
})
app.get("/soma", (request, response) => {
    var valor1 = 10;
    var valor2 = 10;
    var resultado = valor1 + valor2;
    response.send('O resultado é: ${ resultado}');
})
//acessar porta e na segunda parte comunica se a porta do servidor esta sendo usado 
app.listen(8080, () =>
    console.log("O servidor esta rodando na porta 8080")
);

app.post("/soma_parametros", (request, response) => {

    const valor1 = request.body.valor1;
    const valor2 = request.body.valor2;
    const resultado = valor1 + valor2;

})