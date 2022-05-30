const mongoose = require("mongoose");

const signup = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    // unique: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  quote: {
    type: String,
  },
});

module.exports = mongoose.model("Users", signup);
