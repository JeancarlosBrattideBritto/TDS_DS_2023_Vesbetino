const conn = require("../mysql.knex");

module.exports = {
    buscaTodos: async () => {
        return await conn.select(["turmas.id as turmas_id",
            "professor.id as professor_id",
            "professor.nome as professor_nome",
            "alunos.id as alunos_id",
            "alunos.nome as aluno_nome"]

    ).from("turmas").innerJoin("professor", "turmas.professor_id", "professor.id")
    .innerJoin("alunos", "turmas.aluno_id", "alunos.id");
    },
    inserirTurma: async (data) => {
        return await conn.insert(data).from("turmas");
    }

}