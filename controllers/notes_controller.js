var express = require('express');
var bcrypt = require('bcryptjs');
var Note = require('../models/Note.js');
var Title = require('../models/Title.js');
var User = require('../models/User.js');
var session = require('express-session');
var cheerio = require('cheerio');
var db = require('../config/db');
var request = require('request');
var mongojs = require('mongojs');
var mongoose = require('mongoose');
var router = express.Router();



//Save to DB
app.post('/submit', function(req, res) {
  console.log(req.body.notename);
  var noteSave = req.body.notename;
    if (err) {
      console.log(err);
    } else {

      var newNote = Note ({
        notename: noteSave
      });
      // save the new title
      newNote.save(function(err) {
        if (err) throw err;
        console.log('Note created!');
      });

      res.send(saved);
    }
  
});

module.exports = router;

// //Get from DB
// app.get('/all', function(req, res) {
//   db.notes.find({}, function(err, found) {
//     if (err) {
//       console.log(err);
//     } else {
//       res.json(found);
//     }
//   });
// });


// //Find One in DB
// app.get('/find/:id', function(req, res){

//     //when searching by an id, the id needs to be passed in as (mongojs.ObjectId(IDYOUWANTTOFIND))
//     console.log(req.params.id);
//     db.notes.findOne({
//         '_id': mongojs.ObjectId(req.params.id)
//     }, function(err, found){
//         if (err) {
//             console.log(err);
//             res.send(err);
//         } else {
//             console.log(found);
//             res.send(found);
//         }
//     });
// });


// //Update One in the DB
// app.post('/update/:id', function(req, res) {
//     //when searching by an id, the id needs to be passed in as (mongojs.ObjectId(IDYOUWANTTOFIND))

//   db.notes.update({
//     '_id': mongojs.ObjectId(req.params.id)
//   },{
//     $set: {
//       'title': req.body.title,
//       'note': req.body.note,
//       'modified': Date.now()
//     }
//   }, function(err, edited) {
//     if (err) {
//       console.log(err);
//             res.send(err);
//     } else {
//       console.log(edited);
//             res.send(edited);
//     }
//   });
// });


// //Delete One from the DB
// app.get('/delete/:id', function(req, res) {
//   db.notes.remove({
//     "_id": req.params.id
//   }, function(err, removed) {
//     if (err) {
//       console.log(err);
//             res.send(err);
//     } else {
//       console.log(removed);
//       res.send(removed);
//     }
//   });
// });


// //Clear the DB
// app.get('/clearall', function(req, res) {
//     db.notes.remove({}, function(err, response){
//         if (err){
//             console.log(err);
//             res.send(err);
//         } else {
//             console.log(response);
//             res.send(response);
//         }
//     });
// });



// app.listen(3000, function() {
//   console.log('App running on port 3000!');
// });