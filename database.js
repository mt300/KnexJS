var knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'clarinha',
        database : 'knex'
    }
});


module.exports = knex;