const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const auth = require('../middleware/auth');

const Blog = require('../models/blog');

//create an article(blog)
router.post('/blogs/new', auth, async (req, res) => {
  const blog = new Blog({
    ...req.body,
    owner: req.user._id
  });
  try {
    await blog.save();
    res.status(201).send(blog);
  } catch (e) {
    res.status(400).send(e);
  }
});

//get all ze blogposts
router.get('/blogs', (req, res) => {
  Blog.find({})
    .then((blogs) => {
      res.send(blogs);
    })
    .catch((e) => {
      res.send(e);
    });
});

// get an article by its ID
router.get('/blogs/:id', auth, async (req, res) => {
  const _id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    res.status(400).send('Not a valid blog id');
  }
  try {
    const blog = await Blog.findOne({ _id, owner: req.user._id });
    if (!blog) {
      return res.status(404).send();
    }
    res.send(blog);
  } catch (e) {
    res.status(500).send();
  }
});

// update a blog

router.patch('/blogs/:id', auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['title', 'text'];

  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    if (!blog) {
      return res.status(404).send();
    }
    res.send(blog);
  } catch (e) {
    res.status(400).send(e);
  }
});
// add a comment
router.patch;

module.exports = router;
