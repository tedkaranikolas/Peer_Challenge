var express = require('express');
var app=express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());

var mongoose = require('mongoose');

var mongoURI = "mongodb://localhost:27017/assignments";
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function (err) {
    console.log('mongodb connection error:', err);
});

MongoDB.once('open', function () {
  console.log('mongodb connection open!');
});

app.use( express.static( 'public' ) );

app.get( '/', function( req, res ){
  res.sendFile( path.resolve( 'views/index.html' ) );
});
