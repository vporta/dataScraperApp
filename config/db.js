var mongoose = require('mongoose');
var scrape_db = 'mongodb://localhost/scrape_db';
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