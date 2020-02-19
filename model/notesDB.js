let knex = require('../connection.js')

// post data
let insert_data = (data) => {
    return knex("Notes").insert(data)
}

// update data
let update_data = (data,Notes_id) => {
    return knex("Notes").update(data).where("Notes.Notes_id",Notes_id)
}

// delete data
let del_data = (Notes_id) => {
    return knex("Notes")
    .where("Notes.Notes_id",Notes_id)
    .del()
}
// get all data
let get_data = ()=>{
    return knex.select("*")
    .from("Notes")
}
//get_id_by data
let getby_id = (Notes_id)=>{
    return knex.select("*").from("Notes")
    .where("Notes.Notes_id",Notes_id)
}
module.exports = {insert_data,update_data,del_data,get_data,getby_id}