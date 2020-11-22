const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Comment = require('../models/comment');
const Blog = require('../models/blog');

// Add a new comment
router.post('/comments/:blogId/add', async (req, res) => {
  try {
    const comment = new Comment(req.body);
    const savedComment = await comment.save();

    const blog = await Blog.findById(req.params.blogId);
    blog.comments.push(savedComment._id);
    const savedBlog = await blog.save();
    res.json(savedBlog);
  } catch (error) {
    res.status(400).json(`Error: ${error}`);
  }
});

// get all the comments
router.get('/comments', async (req, res) => {
  await Comment.find()
    .then((comment) => {
      res.json(comment);
    })
    .catch((error) => res.status(400).json(`Error: ${error}`));
});

// get a specific blog comments
router.get('/:blogId/comments', async (req, res) => {
  try {
    const blog = (await Blog.findById(req.params.blogId)).populate('comments');
    const commentIds = blog.comments;
    const commentPromises = commentIds.map((_id) => {
      return Comment.findOne({ _id });
    });
    const comments = await Promise.all(commentPromises);
    res.json(comments);
  } catch (error) {
    res.status(400).json(`Error: ${error}`);
  }
});

module.exports = router;
