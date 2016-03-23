import * as express from 'express';
import * as mongoose from 'mongoose';
import BlogModel = require('../models/blogModel');
import repository = BlogModel.repository;

export function addBlog(req: express.Request, res: express.Response) {
  repository.create(req.body, (error, blog) => {
    if (error) {
      res.send('ERROR');
    } else {
      res.send(blog);
    }
  });
}

export function allBlogs(req: express.Request, res: express.Response) {
  repository.find(req.query, (error, blogs) => {
    if (error) {
      res.send('ERROR');
    } else {
      res.json(blogs);
    }
  });
}

// midelware
export function findById(req: express.Request, res: express.Response, next: express.NextFunction) {
  repository.findById(req.params.blogId, (error, blog) => {
    if (error) {
      res.send(error);
    }
    else if (blog) {
      req.user = blog;
      next();
    }
    else { res.send('No blog found'); }
  });
}

export function findBlogById(req: express.Request, res: express.Response) {
  res.json(req.user);
}

export function deleteBlog(req: express.Request, res: express.Response) {
  req.user.remove((error) => {
    if (error) res.send(error);
    else res.status(200).send('Blog Removed');
  });
}

export function updateBlog(req: express.Request, res: express.Response) {
  req.user.title = req.body.title;
  req.user.body = req.body.body;
  req.user.meta = req.body.meta;
  req.user.save((error, user) => {
    if (error) res.send(error);
    else res.status(200).send(user);
  });
}

export function updatePeaceBlog(req: express.Request, res: express.Response) {
  if (req.user._id) delete req.user._id;
  for (var p in req.body) {
    req.user[p] = req.body[p];
  }
  req.user.save((error, user) => {
    if (error) res.send(error);
    else res.status(200).send(user);
  });
}

export function commentsOfThisBlog(req: express.Request, res: express.Response) {
  res.json(req.user.comments);
}

export function addCommentTothisBlog(req: express.Request, res: express.Response) {
  //res.json(req.user.comments);
  req.user.comments.push(req.body);
  req.user.save((error, user) => {
    if (error) res.send(error);
    else res.status(200).send(user);
  });
}
