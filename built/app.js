"use strict";
var express = require('express');
var blog = require('./app/routes/blogRoute');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
mongoose.connect('mongodb://localhost/blog');
var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use('/blogs/:blogId', blog.findById);
app.post('/blogs/', blog.addBlog);
app.get('/blogs/', blog.allBlogs);
app.get('/blogs/:blogId', blog.findBlogById);
app.delete('/blogs/:blogId', blog.deleteBlog);
app.put('/blogs/:blogId', blog.updateBlog);
app.patch('/blogs/:blogId', blog.updatePeaceBlog);
app.get('/blogs/:blogId/comments', blog.commentsOfThisBlog);
app.post('/blogs/:blogId/comments', blog.addCommentTothisBlog);
app.listen(port, function () {
    console.log('Running on port : ' + port);
});
//# sourceMappingURL=app.js.map