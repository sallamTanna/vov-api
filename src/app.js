const express = require('express');
const controllers = require('./controllers/index');
const app = express();
require('./models/db')();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(controllers);
app.set('port', process.env.PORT || 3001);
app.use(function(req, res, next) {
  res.status(404).send("Sorry, can't find the page")
})

module.exports = app;
