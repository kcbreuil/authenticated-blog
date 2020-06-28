const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    validate(value) {
      if (value.toLowerCase() === "password") {
        throw new Error("Password can't be password.");
      }
      if (value.length < 6) {
        throw new Error("Password must be at least 6 characters long.");
      }
    },
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user.id.toString() }, "greyhound");
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};
const User = mongoose.model("User", userSchema);
module.exports = User;
