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


router.get('/all', function(req, res) {
// res.send('hello world');
  Title.find({}, function(err, found) {
    if (err) {
      console.log(err);
    } else {
      res.json(found);
    }
  })
});



router.get('/scrape', function(req, res) {
  request('https://www.kickstarter.com/discover/categories/art?ref=discover_index', function(error, response, html) {
    var $ = cheerio.load(html);
    var result = [];

    $('.featured-project__title.ratio-16-9').each(function(i, element){

    var titlename = $(this).children('a').text();
    var link = $(element).children('a').attr('href');
    
    var newTitle = Title ({
      titlename: titlename,
      link: link
    });
    // save the new title
    newTitle.save(function(err) {
      if (err) throw err;
      console.log('Title created!');
    });
            
    });
    console.log(result);
  });
  // res.send("Scrape Complete");
});

module.exports = router;
