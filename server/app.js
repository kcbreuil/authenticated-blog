require('./db/mongoose');
const express = require('express'),
  cors = require('cors'),
  path = require('path');
//library from node.js to grab file paths

// Imports routes
const userRouter = require('./routes/users');
const blogRouter = require('./routes/blogs');
const commentRouter = require('./routes/comments');

const app = express();

app.use(cors());
app.use(express.json());

app.use(userRouter);
app.use(blogRouter);
app.use(commentRouter);

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
module.exports = app;
