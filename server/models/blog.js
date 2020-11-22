const mongoose = require('mongoose');
const Comment = require('./comment');
const User = require('./user');

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
      type: mongoose.Types.ObjectId,
      ref: 'User'
    },
    comments: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Comment'
      }
    ]
  },
  {
    timestamps: true
  },
  { usePushEach: true }
);

// create relation with comments
// blogSchema.virtual('comments', {
//   ref: 'Comment',
//   localField: '_id',
//   foreignField: 'owner'
// });

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
