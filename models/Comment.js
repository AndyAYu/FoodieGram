const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    content: String,
    post: { type: Schema.Types.ObjectId, ref: 'post'},
    user: { type: Schema.Types.ObjectId, ref: 'user'},
    //belongs to
});

const Comment = mongoose.model('comment', CommentSchema);

module.exports = Comment;