const express = require('express');
const router = new express.Router();
const mongoose = require('mongoose');
const auth = require('../middleware/auth.js');
const User = require('../models/user');

//Create a User
router.post('/users', async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

// get all the bloggers / users

router.get('/users', async (req, res) => {
  await User.find({})
    .then((users) => {
      res.send(users);
    })
    .catch((e) => {
      res.send(e);
    });
});

//get a specific user/blogger

router.get('/users/:id', auth, async (req, res) => {
  const _id = req.params.id;
  if (mongoose.Types.ObjectId.isValid(_id)) {
    await User.findById(_id)
      .then((user) => {
        if (!user) {
          return res.status(404).send();
        }
        res.send(user);
      })
      .catch((e) => {
        console.log(e.toString());
        res.status(500).send();
      });
  } else {
    res.status(400).send('Not a valid id');
  }
});

//update a bloggers info

router.patch('/users/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['username', 'password'];

  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

//login a user

router.post('/users/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.username,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

//Logout a user
router.post('/users/logout', auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.send({ message: 'Logged out' });
  } catch (e) {
    req.status(500).send();
  }
});

// Delete a User //
router.delete('/users/me', auth, async (req, res) => {
  try {
    await req.user.remove();
    res.send(req.user);
  } catch (e) {
    res.status(500).send();
  }
});
// Get current user //

router.get('/users/me', auth, async (req, res) => {
  try {
    res.send(req.user);
  } catch (e) {
    res.status(500).send();
  }
});

//logout a user
module.exports = router;
