const express = require('express');
const bodyParser = require('body-parser');
const mongoClient = require('mongodb').MongoClient;

const api = require('./api/api');
const db = require('./config/db');

const app = express();
app.set('port', process.env.PORT || 3001)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoClient.connect(db.url, (err, database) => {
  if(err) return console.log(err);

  require('./routes')(app, database.db("my-sandbox"))
})

app.listen(app.get('port'), () => {
  console.log("Listening on port: ", app.get('port'));
})