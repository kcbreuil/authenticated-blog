const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  blog: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Blog'
  },
  owner: {
    type: String
  }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
