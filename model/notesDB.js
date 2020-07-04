let knex = require('../connection.js')
// post data

let insert = (data) => {
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

//get_id_by data
let getby_id = (Notes_id)=>{
    return knex.select("*").from("Notes")
    .where("Notes.Notes_id",Notes_id)
};
// 
let search_data = (search) => {
    return knex.select("*")
    .from('Notes')
    .where('Tasks','like',  '%' + search + '%')
};

// post data for Attachment
let insert_data = (data) => {
    return knex("user_Notes").insert(data)
}

// get all data with reminder
let get_all_data = () => {
    return knex.select("*").from('Notes')
    .join("user_Notes" ,"Notes.Notes_id","user_Notes.id")
    .select("Notes.Notes_id","Tasks","Notes","user_Notes.id","Captions","Attachment")
};

module.exports = {insert,insert_data,
    update_data,del_data, getby_id,
    search_data,get_all_data}