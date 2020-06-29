const express = require("express");
const { res } = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const auth = require("../middleware/auth");

const Article = require("../models/article");

//create an article(blog)
router.post("/articles/new", auth, async (req, res) => {
  const article = new Article({
    ...req.body,
    owner: req.user._id,
  });
  try {
    await article.save();
    res.status(201).send(article);
  } catch (e) {
    res.status(400).send(e);
  }
});

//get all ze articles(blogposts)
router.get("/articles", (req, res) => {
  Article.find({})
    .then((articles) => {
      res.send(articles);
    })
    .catch((e) => {
      res.send(e);
    });
});

// get an article by its ID
router.get("/articles/:id", auth, async (req, res) => {
  const _id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    res.status(400).send("Not a valid article id");
  }
  try {
    const article = await Article.findOne({ _id, owner: req.user._id });
    if (!article) {
      return res.status(404).send();
    }
    res.send(article);
  } catch (e) {
    res.status(500).send();
  }
});

// update an article

router.patch("/articles/:id", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["title", "text"];

  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }
  try {
    const article = await Article.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!article) {
      return res.status(404).send();
    }
    res.send(article);
  } catch (e) {
    res.status(400).send(e);
  }
});
module.exports = router;
