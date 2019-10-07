const express = require('express');
const app = express();
var mongoose = require('mongoose');

var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('Connected to DB');
  });
  //Connessione al DB
  mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true,
      useUnifiedTopology: true } );