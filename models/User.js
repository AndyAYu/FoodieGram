const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    handle: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    posts: [{
      type: Schema.Types.ObjectId,
      ref: 'Post'}],
    comments: [{ 
      type: Schema.Types.ObjectId,
      ref: 'Comments'}],
    friends:[{ 
      type: Schema.Types.ObjectId,
      ref: 'User'
    }]
  }, 
  {
    timestamps: true
  })

module.exports = User = mongoose.model('User', UserSchema);
