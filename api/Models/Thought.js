const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ThoughtSchema = new Schema({
    content: {
      type: String
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'user'
    },
    date: {
      type: Date,
      default: Date.now
    }
});

const Thought = mongoose.model('thought', ThoughtSchema);
  
module.exports = Thought;