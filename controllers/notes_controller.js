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


// //Delete One from the DB
router.delete('/delete/:id', function(req, res) {
  Note.findOne({"_id": req.params.id}).exec(function(err, removed) {
    if (err) {
      console.log(err);
            res.send(err);
    } else if (removed){
      console.log(removed);
      removed.remove();
    }
  });
});

module.exports = router;





