var mongoose = require('mongoose');
var scrape_db = 'mongodb://localhost/scrape_db';

// Database configuration with mongoose
// var scrape_db = 'mongodb://localhost/week18mongoose';
// var mlabDatabaseUri ='mongodb://test:test217@ds061721.mlab.com:61721/heroku_d103gdp1';
// if (process.env.MONGODB_URI) {
//   console.log('THIS IS THE HEROKU MONGODB URI =====> ' + process.env.MONGODB_URI);
//   mongoose.connect(process.env.MONGODB_URI);
// } else {
//   mongoose.connect(scrape_db);
// }

//Database configuration
mongoose.connect(scrape_db);

var db = mongoose.connection;

db.once('open', function() {
  // we're connected!
  console.log('connected to ' + scrape_db);
});

db.on('error', function(err) {
  console.log('Database Error:', err);
});

module.exports = mongoose;