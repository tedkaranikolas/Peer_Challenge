var express = require('express');
var app=express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());

var mongoose = require('mongoose');
var mongoURI = "mongodb://localhost:27017/assignments";
var MongoDB = mongoose.connect(mongoURI).connection;

//model required for DB
var User = require('../models/user');

MongoDB.on('error', function (err) {
    console.log('mongodb connection error:', err);
});

MongoDB.once('open', function () {
  console.log('mongodb connection open!');
});

//static folder
app.use( express.static( 'public' ) );

//spin up server
app.listen( 8080, 'localhost', function( req, res ){
  console.log( 'listening on 8080' );
});

//base url
app.get( '/', function( req, res ){
  res.sendFile( path.resolve( 'views/index.html' ) );
});

//create post route
app.post('/postAssignment', function(req, res){
  console.log('in post student');
  console.log( 'req.body = ' + req.body.student_name);
  var newUser = new User ({
    assignment_number: req.body.assignment_number,
    student_name: req.body.student_name,
    score: req.body.score,
    date_completed: req.body.submission_date
  });
  newUser.save(function(err){
    if(err){
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('user saved');
      res.sendStatus(200);
    }
  });//end saved data
});// end post

//create route to retrieve data
app.get('/getAssignment', function(req, res){
  console.log('in getAssignment');
  User.find()
  .then(function(data){
    res.send(data);
  });
});
