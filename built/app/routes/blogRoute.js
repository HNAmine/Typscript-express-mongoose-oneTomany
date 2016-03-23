"use strict";
var controller = require('../controllers/blogController');
function addBlog(req, res) {
    controller.addBlog(req, res);
}
exports.addBlog = addBlog;
function allBlogs(req, res) {
    controller.allBlogs(req, res);
}
exports.allBlogs = allBlogs;
function findBlogById(req, res) {
    controller.findBlogById(req, res);
}
exports.findBlogById = findBlogById;
function findById(req, res, next) {
    controller.findById(req, res, next);
}
exports.findById = findById;
function deleteBlog(req, res) {
    controller.deleteBlog(req, res);
}
exports.deleteBlog = deleteBlog;
function updateBlog(req, res) {
    controller.updateBlog(req, res);
}
exports.updateBlog = updateBlog;
function updatePeaceBlog(req, res) {
    controller.updatePeaceBlog(req, res);
}
exports.updatePeaceBlog = updatePeaceBlog;
function commentsOfThisBlog(req, res) {
    controller.commentsOfThisBlog(req, res);
}
exports.commentsOfThisBlog = commentsOfThisBlog;
function addCommentTothisBlog(req, res) {
    controller.addCommentTothisBlog(req, res);
}
exports.addCommentTothisBlog = addCommentTothisBlog;
//# sourceMappingURL=blogRoute.js.map