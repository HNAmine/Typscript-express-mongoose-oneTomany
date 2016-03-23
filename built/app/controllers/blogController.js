"use strict";
var BlogModel = require('../models/blogModel');
var repository = BlogModel.repository;
function addBlog(req, res) {
    repository.create(req.body, function (error, blog) {
        if (error) {
            res.send('ERROR');
        }
        else {
            res.send(blog);
        }
    });
}
exports.addBlog = addBlog;
function allBlogs(req, res) {
    repository.find(req.query, function (error, blogs) {
        if (error) {
            res.send('ERROR');
        }
        else {
            res.json(blogs);
        }
    });
}
exports.allBlogs = allBlogs;
function findById(req, res, next) {
    repository.findById(req.params.blogId, function (error, blog) {
        if (error) {
            res.send(error);
        }
        else if (blog) {
            req.user = blog;
            next();
        }
        else {
            res.send('No blog found');
        }
    });
}
exports.findById = findById;
function findBlogById(req, res) {
    res.json(req.user);
}
exports.findBlogById = findBlogById;
function deleteBlog(req, res) {
    req.user.remove(function (error) {
        if (error)
            res.send(error);
        else
            res.status(200).send('Blog Removed');
    });
}
exports.deleteBlog = deleteBlog;
function updateBlog(req, res) {
    req.user.title = req.body.title;
    req.user.body = req.body.body;
    req.user.meta = req.body.meta;
    req.user.save(function (error, user) {
        if (error)
            res.send(error);
        else
            res.status(200).send(user);
    });
}
exports.updateBlog = updateBlog;
function updatePeaceBlog(req, res) {
    if (req.user._id)
        delete req.user._id;
    for (var p in req.body) {
        req.user[p] = req.body[p];
    }
    req.user.save(function (error, user) {
        if (error)
            res.send(error);
        else
            res.status(200).send(user);
    });
}
exports.updatePeaceBlog = updatePeaceBlog;
function commentsOfThisBlog(req, res) {
    res.json(req.user.comments);
}
exports.commentsOfThisBlog = commentsOfThisBlog;
function addCommentTothisBlog(req, res) {
    req.user.comments.push(req.body);
    req.user.save(function (error, user) {
        if (error)
            res.send(error);
        else
            res.status(200).send(user);
    });
}
exports.addCommentTothisBlog = addCommentTothisBlog;
//# sourceMappingURL=blogController.js.map