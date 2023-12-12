const { buscaTodos, inserirTurma} = require("../repository/secretaria.repository");
const buscaProfessor = require("../repository/professores.repository").buscaPorId;
const buscaAlunos = require("../repository/alunos.repository").buscaAlunoPorId;


module.exports = {
    buscaTodos: (request, response) => {
        buscaTodos().then((data) => {
            response.send(data);
        }).catch((error)=>{
            response.status(500).send({ message: "Erro" });
        })
    },
    vincularProfessoresAlunos: async (request, response) => {
        const { aluno_id, professor_id } = request.body;
        const data = { aluno_id, professor_id };
        
        const existProfessor = await buscaProfessor(professor_id);
        const existAluno = await buscaAlunos(aluno_id);  

        if (existProfessor.lenght <= 0) {
            return response.status(404).send({ message: "id do professor não existe na tabela professores"});
        }
        if (existAluno.lenght <= 0) {
            return response.status(404).send({ message: "id do aluno não existe na tabela alunos"});
        }


        await inserirTurma(data).then((data) =>{

            return response.send({message: "vinculo realizado com sucesso"});
        }).catch((error) => {
            console.log(error);
            return response.status(500).send({message: "erro ao realizar vinculo com a turma"});
        });

    },
    deletar: (request, response) => {

        const { id } = request.params;
        deletar(id).then((data) => {

            response.send({ message: "sucesso ao deletar!" });
        }).catch((error) => {

            response.status(500).send({ message: "erro ao tentar deletar!" });
            
        }); 
    }
}
