var knex = require('knex')({
    client: 'mysql',
    connection: {
        host : '127.0.0.1',
        user : 'root',
        password : "Kajal@123",
        database : 'Notes_Project'
    }
  });

module.exports = knex;
