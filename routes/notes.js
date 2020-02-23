const express = require('express');
const app = express.Router();
const appDB = require("../model/notesDB");

// post data
app.post("/api", (req, res) => {
    data = {
        id: req.body.id,
        Captions: req.body.Captions,
        Attachment: req.body.Attachment
    }
    appDB.insert_data(data)
        .then((s_data) => {
            res.send(s_data)
        }).catch((err) => {
            console.log(err)
        })
})

// update data
app.put("/Api/:Notes_id", (req, res) => {
    let Notes_id = req.params.Notes_id
    let data = {
        Notes_id: req.body.Notes_id,
        Tasks: req.body.Tasks,
        Notes: req.body.Notes
    }
    appDB.update_data(data, Notes_id)
        .then((s_data) => {
            res.send(s_data)
        }).catch((err) => {
            console.log(err)
        })
})

// delete data
app.delete("/del_Api/:Notes_id", (req, res) => {
    let Notes_id = req.params.Notes_id
    appDB.del_data(Notes_id)
        .then((s_data) => {
            res.send(s_data)
        }).catch((err) => {
            console.log(err)
        })
})

// Id by get data
app.get("/Api/:Notes_id", (req, res) => {
    let Notes_id = req.params.Notes_id
    appDB.getby_id(Notes_id)
        .then((s_data) => {
            res.send(s_data)
        }).catch((err) => {
            console.log(err)
        })
})
// get by name 
app.get("/get/:search", (req, res) => {
    var search = req.params.search
    appDB.search_data(search)
        .then((data) => {
            res.send(data)
        }).catch((err) => {
            console.log(err)
        })
});

// get alldata
app.get("/get_Api", (req, res) => {
    appDB.get_data()
    .then((data) => {
        var list = []
        for (var y = 0; y < data.length; y++) {
            let task = data[y]["Tasks"]
            list.push(task)
            }
            setTimeout(function loop() {
                console.log(list.shift());
                if (list.length)
                    setTimeout(loop, 5000);
            }, 5000);
    })
})

app.get("/getapi", (req, res) => {
    appDB.get_all_data()
        .then((r_data) => {
            res.send(r_data)
        }).catch((err) => {
            console.log(err)
        })
});

module.exports = app;