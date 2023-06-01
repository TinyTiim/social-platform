const mongoose = require('mongoose');
const { Schema } = mongoose;
const reactionSchema = require('./reaction');

const thoughtSchema = new Schema({
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reactionSchema],
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  });
  
  thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });
  
  const Thought = mongoose.model('Thought', thoughtSchema);
  
  module.exports = Thought;