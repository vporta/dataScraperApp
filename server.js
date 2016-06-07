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
//remove handlebars files and add html file
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
// var exphbs = require('express-handlebars');
// app.engine('handlebars', exphbs({
//     defaultLayout: 'main'
// }));
// app.set('view engine', 'handlebars');

// var users_controllers = require('./controllers/users_controller.js');
var titles_controllers = require('./controllers/titles_controller.js');

// app.use('/', users_controllers);
app.use('/', titles_controllers);






app.listen(3000, function() {
  console.log('App running on port 3000!');
});