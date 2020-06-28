if (process.env.NODE_ENV !== "production") require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

mongoose.connect(`mongodb://127.0.0.1:27017/blog-app`, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
const connection = mongoose.connection;
connection.once("open", () =>
  console.log("MongoDB connection is established.")
);
// Imports routes
const userRouter = require("./routes/users");
const articleRouter = require("./routes/articles");

const app = express();

app.use(cors());
app.use(express.json());

// app.use((req, res) => {
//   console.log(req.method, req.path);
//   res
//     .status(503)
//     .json({ error: 'Site is down for maintenance, check back soon.' });
// });

app.use(userRouter);
app.use(articleRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Express server is up on port ${port}`);
});
