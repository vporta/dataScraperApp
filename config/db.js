var mongoose = require('mongoose');

// Database configuration with mongoose

var scrape_db = 'mongodb://localhost/scrape_db';

// if (process.env.MONGODB_URI) {
//   console.log('THIS IS THE HEROKU MONGODB URI =====> ' + process.env.MONGODB_URI);
//   mongoose.connect(process.env.MONGODB_URI);
// } else {
//   mongoose.connect(scrape_db);
// }

//Database configuration
// mongoose.connect(scrape_db);
  

var db = mongoose.connection;

db.on('error', function(err) {
  console.log('Database Error:', err);
});

db.once('open', function() {
  // we're connected!
  console.log('connected to ' + scrape_db);
});

module.exports = mongoose;

// Database configuration with mongoose
// var databaseUri = 'mongodb://localhost/week18day3mongoose';
// var mlabDatabaseUri ='mongodb://test:test217@ds061721.mlab.com:61721/heroku_d103gdp1';
// if (process.env.MONGODB_URI) {
//   console.log('THIS IS THE HEROKU MONGODB URI =====> ' + process.env.MONGODB_URI);
//   mongoose.connect(process.env.MONGODB_URI);
// } else {
//   mongoose.connect(databaseUri);
// }

// var db = mongoose.connection;

// // show any mongoose errors
// db.on('error', function(err) {
//   console.log('Mongoose Error: ', err);
// });

// // once logged in to the db through mongoose, log a success message
// db.once('open', function() {
//   console.log('Mongoose connection successful.');
// });
