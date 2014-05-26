var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MemoSchema = new Schema({
  contents: {
    type: String
  },
  author: {
    type: String
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exprorts = mongoose.model('memo', MemoSchema);
