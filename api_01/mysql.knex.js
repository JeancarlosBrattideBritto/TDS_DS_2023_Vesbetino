const kenex = require("knex");

module.exports = kenex({
    client : "musql",
    connection : {
        host: "127.0.0.1",
        port : 3306,
        user : "root",
        password : "root",
        database : "apiDB"
    }
})