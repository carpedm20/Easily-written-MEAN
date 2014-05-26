var express = require('express')
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/', function(req, res) {
  res.send('Hello MEAN!!!');
});

app.use('/memo', require('./routes/memo'));

var server = app.listen(3000, function() {
  mongoose.connect('mongodb://localhost/memoapp');
  console.log('Listening on port %d', server.address().port);
});
