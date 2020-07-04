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



// var readlineSync = require('readline-sync');
// var userName = readlineSync.question('enter your time hr :) ');
// var userInput = parseInt(userName)
// console.log(typeof(userInput));


// function task() {
// //     var readlineSync = require('readline-sync');
// //     var userName = readlineSync.question('enter your time hr :) ');
// //     var userInput = parseInt(userName)
// //     console.log(userInput);

//     console.log('setTimeout Demo!')
// }
// setTimeout(task, 6000);