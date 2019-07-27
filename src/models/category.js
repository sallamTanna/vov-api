const mongoose = require('mongoose');
const Schema = mongoose.Schema;

exports.Category = mongoose.model('Category', new Schema({
  name: String,
  icon: String,
  color: String,
}));
