let knex = require('./connection.js')

// first tbl 
knex.schema.createTable('user_Notes', (table) => {
    table.increments('id');
    table.string('Captions');
    table.string('Attachment');
    })
    .then(()=>{
        console.log("tbl created")
    }).catch((err)=>{
        console.log("there are some error")
    })


