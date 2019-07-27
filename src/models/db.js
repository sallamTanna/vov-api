require('dotenv').config()
let link;
const mongoose = require('mongoose');
const {
  MONGODB_URI,
  LOCAL_URI,
  NODE_ENV
} = process.env;

if (NODE_ENV == 'development') {
  link = LOCAL_URI
} else {
  link = MONGODB_URI
}

mongoose.Promise = require('bluebird');

//To check if we connected to the database
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function() {
  console.log('We are connected to the Mongo database :)');
});

module.exports = () => mongoose.connect(link, {
  useNewUrlParser: true
});
