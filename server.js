var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');
var request = require('request');
var bcrypt = require('bcryptjs');
var cheerio = require('cheerio');
var db = require('./config/db');
var path = require('path');


var app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(process.cwd() + '/public'));
app.use(express.static(__dirname + '/public'));
// app.set('views', path.join(__dirname, 'views'));

app.use(session({ secret: 'app', cookie: { maxAge: 6000000 }}));

//Override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// var users_controllers = require('./controllers/users_controller.js');
var titles_controllers = require('./controllers/titles_controller.js');

// app.use('/', users_controllers);
app.use('/', titles_controllers);


//Database configuration
// var mongojs = require('mongojs');
// var databaseUrl = "";
// var collections = [""];
// var db = mongojs(databaseUrl, collections);
// db.on('error', function(err) {
//   console.log('Database Error:', err);
// });

// Routes
// app.get('/', function(req, res) {
//   res.send(index.html);
// });

// //Save to DB
// app.post('/submit', function(req, res) {
//   console.log(req.body);
//   db.notes.save(req.body, function(err, saved) {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(saved);
//     }
//   });
// });

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



app.listen(3000, function() {
  console.log('App running on port 3000!');
});