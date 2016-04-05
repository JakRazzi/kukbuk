var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

mongoose.connect(process.env.MONGO_UI || 'mongodb://localhost/kukbuk-test');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser);
require('./server/routes.js')(app, express);

module.exports = app;