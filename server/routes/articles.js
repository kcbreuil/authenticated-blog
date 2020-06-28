const express = require("express");
const { res } = require("express");
const router = express.Router();
const Article = require("../models/article");

router.post("/", (req, res) => {
  Article.create(req.body, (error, article) => {
    if (error) {
      console.log(`Error creating Article, ${new Date()}: ${error}`);
      res.status(400).json(error);
    } else {
      res.status(201).json(article);
    }
  });
});

module.exports = router;
