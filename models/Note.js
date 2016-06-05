var mongoose = require('mongoose');
var mongojs = require('mongojs');
var db = require('../config/db');

var Schema = mongoose.Schema;

// create a schema
var notesSchema = new Schema({
  name: String,
});

// the schema is useless so far
// we need to create a model using it
var Note = mongoose.model('Note', notesSchema);

// make this available to our users in our Node applications
module.exports = Note;