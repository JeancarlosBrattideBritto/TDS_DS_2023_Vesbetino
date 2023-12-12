const conn = require("../mysql.knex");

module.exports = {
    buscaTodos: async () => {
        return await conn.select().from("alunos");
    },
    buscaAlunoPorId: async (id) => {
        return await conn.select().from("alunos").where({ id: id });
    },
    inserir: async (data) => {
        return await conn.insert(data).into("alunos");
    },
    atualizar: async (id, data) => {
        return await conn("alunos").update(data).where({ id: id });
    },
    deletar: async (id) => {
        return await conn("alunos").where({ id: id }).del();
    }
};