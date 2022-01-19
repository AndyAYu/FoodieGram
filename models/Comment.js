const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    body: {
        type: String,
        required: true
    }, 
    post: { type: ObjectId,
        ref: 'Post'
    },
    user: { type: ObjectId,
        ref: 'User'
    },
}, {
    timestamps: true
});

module.exports = Comment = mongoose.model('Comment', CommentSchema);