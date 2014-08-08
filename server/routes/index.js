//modules

var express   = require('express');
var app       = module.exports = express();
var config    = require('../config');
var Reader    = require('popstar-file-reader');
var reader    = new Reader(config.reader ? config.reader : {});
var _         = require('lodash');
var async     = require('async');
var md        = require('marked');

//routes
app.get('/api/', function(req,res) {
  var feed = reader.getFeed([], 0, 0, function(result) {
    res.send(result);
  });
});

