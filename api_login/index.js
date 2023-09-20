const bodyParser = require('body-parser');
const express = require('express');

const app = new express();
app.use(bodyParser.json());

const usuario = {
    id: 1,
    nome: "Jeancarlos",
    user_nome: "BILI78",
    senha: "1usu12"
}

app.post("/login_usuario", (request, response) => {
    const nome = request.body.nome;
    const senha = request.body.senha;

    if (nome == usuario.nome && senha == usuario.senha) {
        response.send(`login passado `);
    } else { response.send(`login nao passado`); }

    
})

app.get("/pesquisa_usuario", (request, response) => {

    const data = {
        nome: usuario.nome,
        user_nome: usuario.user_nome
    }

    response.send(data);

})

app.listen(8080, () =>
    console.log("O servidor esta rodando na porta 8080")
);