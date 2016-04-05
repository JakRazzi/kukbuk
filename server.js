var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect(process.env.MONGO_UI || 'mongodb://localhost/kukbuk-test');

app.use(express.static(__dirname + '/public'));

module.exports = app;