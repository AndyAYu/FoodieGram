const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    content: String,
    post: { type: Schema.Types.ObjectId, ref: 'post'}//belongs to
});

const Comment = mongoose.model('comment', CommentSchema);

module.exports = Comment;