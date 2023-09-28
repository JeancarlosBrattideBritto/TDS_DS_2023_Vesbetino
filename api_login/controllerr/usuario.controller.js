module.exports ={
    loginUsuario:(request, response) => {
    const nome = request.body.nome;
    const senha = request.body.senha;

    if (nome == usuario.nome && senha == usuario.senha) {
        response.send(`login passado `);
    } else { response.send(`login nao passado`); }

    
},
pesquisa:(request, response) => {

    const data = {
        nome: usuario.nome,
        user_nome: usuario.user_nome
    }

    response.send(data);

}
}
const usuario = {
    id: 1,
    nome: "Jeancarlos",
    user_nome: "BILI78",
    senha: "1usu12"
}