var express = require('express');
var router = express.Router();
var Memo = require('../models/memo');

router.post('/', function(req, res) {
  var memoModel = new Memo(req.body);
  memoModel.save(function(err) {
    if(err) res.send(err);
    res.send();
  });
});

module.exports = router;
