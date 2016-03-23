import * as express from 'express';
import controller = require('../controllers/blogController');

export function addBlog(req: express.Request, res: express.Response) {
    controller.addBlog(req, res);
}

export function allBlogs(req: express.Request, res: express.Response) {
    controller.allBlogs(req, res);
}

export function findBlogById(req: express.Request, res: express.Response) {
    controller.findBlogById(req, res);
}

export function findById(req: express.Request, res: express.Response, next: express.NextFunction) {
    controller.findById(req, res, next);
}

export function deleteBlog(req: express.Request, res: express.Response) {
    controller.deleteBlog(req, res);
}

export function updateBlog(req: express.Request, res: express.Response) {
    controller.updateBlog(req, res);
}

export function updatePeaceBlog(req: express.Request, res: express.Response) {
    controller.updatePeaceBlog(req, res);
}

export function commentsOfThisBlog(req: express.Request, res: express.Response) {
    controller.commentsOfThisBlog(req, res);
}

export function addCommentTothisBlog(req: express.Request, res: express.Response) {
    controller.addCommentTothisBlog(req, res);
}
