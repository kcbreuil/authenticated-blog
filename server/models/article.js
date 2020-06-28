const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;

const ArticleSchema = newSchema({
  title: String,
  text: String,
});

module.exports = mongoose.model("Article", ArticleSchema);
