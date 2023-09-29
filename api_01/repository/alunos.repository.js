const conn = require("../mysql.knex");
moodule.exports = {
    buscaTodos : () => {
         return conn.select().from("alunos");
    }
};