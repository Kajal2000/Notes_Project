let knex = require('./connection.js')

// first tbl 
knex.schema.createTable('Notes', (table) => {
    table.increments('Notes_id');
    table.string('Tasks');
    table.string('Notes');
    })
    .then(()=>{
        console.log("tbl created")
    }).catch((err)=>{
        console.log("there are some error")
    })