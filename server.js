var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');
var request = require('request');
var bcrypt = require('bcryptjs');
var cheerio = require('cheerio');
// var db = require('./config/db');
var path = require('path');
var mongoose = require('mongoose');


var app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(process.cwd() + '/public'));
app.use(express.static(__dirname + '/public'));

app.use(session({ secret: 'app', cookie: { maxAge: 6000000 }}));

//Override with POST having ?_method=DELETE
app.use(methodOverride('_method'))


var notes_controllers = require('./controllers/notes_controller.js');
var titles_controllers = require('./controllers/titles_controller.js');

app.use('/', notes_controllers);
app.use('/', titles_controllers);



// Database configuration with mongoose

var scrape_db = 'mongodb://localhost/scrape_db';

if (process.env.MONGODB_URI) {
  console.log('THIS IS THE HEROKU MONGODB URI =====> ' + process.env.MONGODB_URI);
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect(scrape_db);
}
  
var db = mongoose.connection;

db.on('error', function(err) {
  console.log('Database Error:', err);
});

db.once('open', function() {
  // we're connected!
  console.log('connected to ' + scrape_db);
});
// app.listen(process.env.PORT || 3000, function(){
//   console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
// });

app.listen(process.env.PORT || 3000, function() {
  console.log('App running on port 3000!');
});