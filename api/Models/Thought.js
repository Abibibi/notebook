const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ThoughtSchema = new Schema({
    content: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
});

const Thought = mongoose.model('thought', ThoughtSchema);
  
module.exports = Thought;