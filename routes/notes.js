const express = require('express');
const app = express.Router();
const appDB  = require("../model/notesDB")

app.post("/api",(req,res)=>{
    data = {
        Notes_id : req.body.Notes_id,
        Tasks : req.body.Tasks,
        Notes : req.body.Notes
    }
    appDB.insert_data(data)
        .then((s_data)=>{
            res.send(s_data)
        }).catch((err)=>{ 
            console.log(err)
        })
    })

app.put("/Api/:Notes_id",(req,res)=>{
    let Notes_id = req.params.Notes_id
    let data = {
        Notes_id : req.body.Notes_id,
        Tasks : req.body.Tasks,
        Notes : req.body.Notes
    }
    appDB.update_data(data,Notes_id)
        .then((s_data)=>{
            res.send(s_data)
        }).catch((err)=>{ 
            console.log(err)
    })
})

app.delete("/del_Api/:Notes_id",(req,res)=>{
    let Notes_id = req.params.Notes_id
    appDB.del_data(Notes_id)
        .then((s_data)=>{
            res.send(s_data)
        }).catch((err)=>{ 
            console.log(err)
    })
})

module.exports = app;