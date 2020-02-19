let knex = require('../connection.js')

let insert_data = (data) => {
    return knex("Notes").insert(data)
}

let update_data = (data,Notes_id) => {
    return knex("Notes").update(data).where("Notes.Notes_id",Notes_id)
}

let del_data = (Notes_id) => {
    return knex("Notes")
    .where("Notes.Notes_id",Notes_id)
    .del()
}

module.exports = {insert_data,update_data,del_data}