"use strict";
var mongoose = require('mongoose');
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;
exports.CommentSchema = new Schema({
    title: String,
    body: String,
    date: Date
});
exports.blogShema = new mongoose.Schema({
    author: ObjectId,
    title: String,
    body: String,
    date: Date,
    comments: [exports.CommentSchema],
    meta: {
        votes: Number,
        favs: Number
    }
});
exports.repository = mongoose.model("User", exports.blogShema);
//# sourceMappingURL=blogModel.js.map