const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: /^\S+@\S+\.\S+$/,
  },
  friends: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  thoughts: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Thought'
  }
});

module.exports = usersSchema;
