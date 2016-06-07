var mongoose = require('mongoose');
var mongojs = require('mongojs');
var db = require('../config/db');

var Schema = mongoose.Schema;

// create a schema
var titleSchema = new Schema({
  title: {
    type:String,
    required:true
  },
  link: {
    type:String,
    required:true
  },
  note: {
    type: Schema.Types.ObjectId,
    ref: 'Note'
  }
});

// we need to create a model using it
var Title = mongoose.model('Title', titleSchema);

// make this available to our users in our Node applications
module.exports = Title;

