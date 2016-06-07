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

// router.get('/', function(req, res) {
//   res.render('index', {});
// });

router.get('/', function(req, res) {
    var data = {};
    Title.find({}).then(function(result) {
        data.Title = result;
    });
    res.render('index', data);
});

router.get('/scrape', function(req, res) {
var url = 'https://www.kickstarter.com/discover/categories/music?ref=discover_index';
    request(url, function(error, response, html) {
    var $ = cheerio.load(html);
    $('.featured-project__title.ratio-16-9').each(function(i, element){
    var result = {};
        result.title = $(this).children('a').text();
        result.link = $(element).attr('href');
        var newTitle = new Title (result);
        newTitle.save(function(err) {
            if (err) throw err;
            console.log('Title created!');
      });     
    });
  });
});

router.get('/titles', function(req, res){
  Title.find({}, function(err, doc){
    if (err){
      console.log(err);
    } else {
      res.json(doc);
    }
  });
});

router.get('/titles/:id', function(req, res){
  Title.findOne({'_id': req.params.id})
  .populate('note')
  .exec(function(err, doc){
    if (err){
      console.log(err);
    } else {
      res.json(doc);
    }
  });
});

router.post('/titles/:id', function(req, res){
  var newNote = new Note(req.body);
  newNote.save(function(err, doc){
    if(err){
      console.log(err);
    } else {
      Title.findOneAndUpdate({'_id': req.params.id}, {'note':doc._id})
      .exec(function(err, doc){
        if (err){
          console.log(err);
        } else {
          res.send(doc);
        }
      });
    }
  });
});


module.exports = router;
