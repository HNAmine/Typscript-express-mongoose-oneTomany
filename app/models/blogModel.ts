import * as mongoose from 'mongoose';
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

export var CommentSchema = new Schema({
    title: String,
    body: String,
    date: Date
});

export var blogShema = new mongoose.Schema({
    author: ObjectId,
    title: String,
    body: String,
    date: Date,
    comments: [CommentSchema],
    meta: {
        votes: Number,
        favs: Number
    }
});

export interface IPlog implements mongoose.Document {
    author: String,
    title: String,
    body: String,
    date: Date,
    comments: [{
        title: String,
        body: String,
        date: Date
    }],
    meta: {
        votes: Number,
        favs: Number
    }
}

export var repository = mongoose.model<IPlog>("User", blogShema);
