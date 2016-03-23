var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog');
var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

var Comments = new Schema({
  title: String,
  body: String,
  date: Date
});

var BlogPost = new Schema({
  author: ObjectId,
  title: String,
  body: String,
  date: Date,
  comments: [Comments],
  meta: {
    votes: Number,
    favs: Number
  }
});
mongoose.model('BlogPost', BlogPost);
// retrieve my model
var BlogPost = mongoose.model('BlogPost');

mongoose.model('CommentPost', Comments);
// retrieve my model
var CommentPost = mongoose.model('CommentPost');

BlogPost.find(function(err, blogs) {
  if (err) console.log('ERROR');
  else console.log(blogs[5].comments);
});


/*
// create a blog post
var post = new BlogPost({
  title: 'My Blog 3',
  body: 'Body Blog 3',
  date: new Date(1458735099808),
  meta: {
    votes: 12,
    favs: 10
  },
  comments: [{
    title: "comment 1 blog 4",
    body: "body 1 blog 4"
  }, {
    title: "comment 2 blog 4",
    body: "body 2 blog 4"
  }]
});

// create a comment
post.comments.push({
  title: "comment 3 blog 4",
  body: "body 3 blog 4"
});

post.save(function(err) {
  if (!err) console.log('Success!');
});

BlogPost.findById("56f288371b7f9feb107752c0", function(err, post) {
  if (!err) {
    post.comments[0].remove();
    post.save(function(err) {
      // do something
    });
  }
});

*/


/*
var Cat = mongoose.model('BlogPost', BlogPost);

var kitty = new Cat({ name: 'XX' });
kitty.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('meow');
  }
});
*/


/*import express = require('express');
import * as user from './app/routes/userRoute';
import http = require('http');
import path = require('path');
import mongoose = require('mongoose');
import bodyParser = require('body-parser');


var port = process.env.PORT || 3000;
mongoose.connect('mongodb://localhost/user');
var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.post('/users/', user.create);
app.get('/users/', user.all);
app.use('/users/:userId', user.findById);
app.get('/users/:userId', user.getById);
app.delete('/users/:userId', user.deleteUser);
app.put('/users/:userId', user.updateUser);
app.patch('/users/:userId', user.updatePeaceUser);


app.listen(port, function () {
    console.log('Running on port : ' + port);
});
*/
