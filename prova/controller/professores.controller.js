const { buscaTodos, buscaPorId, inserir, atualizar, deletar } = require("../repository/professores.repository");

module.exports = {
    buscaTodos: (request, response) => {
        buscaTodos().then((data) => {
            response.send(data);
        }).catch((error) => {
            response.status(500).send({ message: "erro ao consultar todos os professores" });
        });
    },
    buscaPorId: (request, response) => {
        const { id } = request.params;
        buscaPorId(id).then((data) => {

            if (data.length > 0) {
                response.send(data);
            } else {
                response.status(400).send({ message: `nenhum professor encontrado com o id:${id}` });
            }

        }).catch((error) => {
            response.status(500).send({ message: "erro ao consultar professor por id" });
        })
    },
    inserir: (request, response) => {
        const { nome, materia } = request.body;

        const data = { nome, materia };

        inserir(data).then((data) => {
            response.send({ message: "professor inserido com sucesso" });
        }).catch((error) => {
            response.status(500).send({ message: "erro ao inserir um novo professor" });
        });
    },
    atualizar: (request, response) => {
        const { id } = request.params;
        const { nome, materia } = request.body;
        const data = { nome, materia };

        atualizar(id, data).then((data) => {
            response.send({ message: "professor, atualizado com sucesso" });
        }).catch((error) => {
            response.status(500).send({ message: "erro ao atualizar o professor" });
        });
    },
    deletar: (request, response) => {
        const { id } = request.params;

        deletar(id).then((data) => {
            response.send({ message: "professor delatado com sucesso" });
        }).catch((error) => {
            console.log(error);
            response.status(500).send({ message: "erro ao deletar professor" });
        })
    }
}