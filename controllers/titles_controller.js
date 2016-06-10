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

router.get('/', function(req, res) {
    res.send(index.html);
});

router.get('/scrape-music', function(req, res) {
var url = 'https://www.kickstarter.com/discover/categories/music?ref=discover_index';
    request(url, function(error, response, html) {
    var $ = cheerio.load(html);
    $('.featured-project__title.ratio-16-9').each(function(i, element){
    var result = {};
        result.title = $(this).children('a').text();
        result.link = $(this).children('a').attr('href');
        var newTitle = new Title (result);
        newTitle.save(function(err) {
            if (err) throw err;
            console.log('Title created!');
      });     
    });
  });
    res.redirect('/');
});

router.get('/scrape-art', function(req, res) {
var url = 'https://www.kickstarter.com/discover/categories/art?ref=discover_index';
    request(url, function(error, response, html) {
    var $ = cheerio.load(html);
    $('.featured-project__title.ratio-16-9').each(function(i, element){
    var result = {};
        result.title = $(this).children('a').text();
        result.link = $(this).children('a').attr('href');
        var newTitle = new Title (result);
        newTitle.save(function(err) {
            if (err) throw err;
            console.log('Title created!');
      });     
    });
  });
    res.redirect('/');
});


router.get('/scrape-crafts', function(req, res) {
var url = 'https://www.kickstarter.com/discover/categories/crafts?ref=discover_index';
    request(url, function(error, response, html) {
    var $ = cheerio.load(html);
    $('.featured-project__title.ratio-16-9').each(function(i, element){
    var result = {};
        result.title = $(this).children('a').text();
        result.link = $(this).children('a').attr('href');
        var newTitle = new Title (result);
        newTitle.save(function(err) {
            if (err) throw err;
            console.log('Title created!');
      });     
    });
  });
    res.redirect('/');
});


router.get('/scrape-food', function(req, res) {
var url = 'https://www.kickstarter.com/discover/categories/food?ref=discover_index';
    request(url, function(error, response, html) {
    var $ = cheerio.load(html);
    $('.featured-project__title.ratio-16-9').each(function(i, element){
    var result = {};
        result.title = $(this).children('a').text();
        result.link = $(this).children('a').attr('href');
        var newTitle = new Title (result);
        newTitle.save(function(err) {
            if (err) throw err;
            console.log('Title created!');
      });     
    });
  });
    res.redirect('/');
});


router.get('/scrape-dance', function(req, res) {
var url = 'https://www.kickstarter.com/discover/categories/dance?ref=discover_index';
    request(url, function(error, response, html) {
    var $ = cheerio.load(html);
    $('.featured-project__title.ratio-16-9').each(function(i, element){
    var result = {};
        result.title = $(this).children('a').text();
        result.link = $(this).children('a').attr('href');
        var newTitle = new Title (result);
        newTitle.save(function(err) {
            if (err) throw err;
            console.log('Title created!');
      });     
    });
  });
    res.redirect('/');
});


router.get('/scrape-design', function(req, res) {
var url = 'https://www.kickstarter.com/discover/categories/design?ref=discover_index';
    request(url, function(error, response, html) {
    var $ = cheerio.load(html);
    $('.featured-project__title.ratio-16-9').each(function(i, element){
    var result = {};
        result.title = $(this).children('a').text();
        result.link = $(this).children('a').attr('href');
        var newTitle = new Title (result);
        newTitle.save(function(err) {
            if (err) throw err;
            console.log('Title created!');
      });     
    });
  });
    res.redirect('/');
});

router.get('/scrape-fashion', function(req, res) {
var url = 'https://www.kickstarter.com/discover/categories/fashion?ref=discover_index';
    request(url, function(error, response, html) {
    var $ = cheerio.load(html);
    $('.featured-project__title.ratio-16-9').each(function(i, element){
    var result = {};
        result.title = $(this).children('a').text();
        result.link = $(this).children('a').attr('href');
        var newTitle = new Title (result);
        newTitle.save(function(err) {
            if (err) throw err;
            console.log('Title created!');
      });     
    });
  });
    res.redirect('/');
});


router.get('/scrape-film%20&%20video', function(req, res) {
var url = 'https://www.kickstarter.com/discover/categories/film%20&%20video?ref=discover_index';
    request(url, function(error, response, html) {
    var $ = cheerio.load(html);
    $('.featured-project__title.ratio-16-9').each(function(i, element){
    var result = {};
        result.title = $(this).children('a').text();
        result.link = $(this).children('a').attr('href');
        var newTitle = new Title (result);
        newTitle.save(function(err) {
            if (err) throw err;
            console.log('Title created!');
      });     
    });
  });
    res.redirect('/');
});


router.get('/scrape-games', function(req, res) {
var url = 'https://www.kickstarter.com/discover/categories/games?ref=discover_index';
    request(url, function(error, response, html) {
    var $ = cheerio.load(html);
    $('.featured-project__title.ratio-16-9').each(function(i, element){
    var result = {};
        result.title = $(this).children('a').text();
        result.link = $(this).children('a').attr('href');
        var newTitle = new Title (result);
        newTitle.save(function(err) {
            if (err) throw err;
            console.log('Title created!');
      });     
    });
  });
    res.redirect('/');
});

router.get('/scrape-journalism', function(req, res) {
var url = 'https://www.kickstarter.com/discover/categories/journalism?ref=discover_index';
    request(url, function(error, response, html) {
    var $ = cheerio.load(html);
    $('.featured-project__title.ratio-16-9').each(function(i, element){
    var result = {};
        result.title = $(this).children('a').text();
        result.link = $(this).children('a').attr('href');
        var newTitle = new Title (result);
        newTitle.save(function(err) {
            if (err) throw err;
            console.log('Title created!');
      });     
    });
  });
    res.redirect('/');
});

router.get('/scrape-photography', function(req, res) {
var url = 'https://www.kickstarter.com/discover/categories/photography?ref=discover_index';
    request(url, function(error, response, html) {
    var $ = cheerio.load(html);
    $('.featured-project__title.ratio-16-9').each(function(i, element){
    var result = {};
        result.title = $(this).children('a').text();
        result.link = $(this).children('a').attr('href');
        var newTitle = new Title (result);
        newTitle.save(function(err) {
            if (err) throw err;
            console.log('Title created!');
      });     
    });
  });
    res.redirect('/');
});

router.get('/scrape-publishing', function(req, res) {
var url = 'https://www.kickstarter.com/discover/categories/publishing?ref=discover_index';
    request(url, function(error, response, html) {
    var $ = cheerio.load(html);
    $('.featured-project__title.ratio-16-9').each(function(i, element){
    var result = {};
        result.title = $(this).children('a').text();
        result.link = $(this).children('a').attr('href');
        var newTitle = new Title (result);
        newTitle.save(function(err) {
            if (err) throw err;
            console.log('Title created!');
      });     
    });
  });
    res.redirect('/');
});

router.get('/scrape-technology', function(req, res) {
var url = 'https://www.kickstarter.com/discover/categories/technology?ref=discover_index';
    request(url, function(error, response, html) {
    var $ = cheerio.load(html);
    $('.featured-project__title.ratio-16-9').each(function(i, element){
    var result = {};
        result.title = $(this).children('a').text();
        result.link = $(this).children('a').attr('href');
        var newTitle = new Title (result);
        newTitle.save(function(err) {
            if (err) throw err;
            console.log('Title created!');
      });     
    });
  });
    res.redirect('/');
});

router.get('/scrape-theater', function(req, res) {
var url = 'https://www.kickstarter.com/discover/categories/theater?ref=discover_index';
    request(url, function(error, response, html) {
    var $ = cheerio.load(html);
    $('.featured-project__title.ratio-16-9').each(function(i, element){
    var result = {};
        result.title = $(this).children('a').text();
        result.link = $(this).children('a').attr('href');
        var newTitle = new Title (result);
        newTitle.save(function(err) {
            if (err) throw err;
            console.log('Title created!');
      });     
    });
  });
    res.redirect('/');
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
