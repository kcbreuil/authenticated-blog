const mongoose = require('mongoose');
const Comment = require('./comment');

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    comments: [
      {
        type: Object,
        postedBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
