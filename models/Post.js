const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema ({
    body: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    user_id: {
        type: Number,
        required: true
    },
    restaurant: {
        type: String,
        required: true
    },
    user: { type: Schema.Types.ObjectId, 
        ref: 'User' 
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]

    // comments: [{
    //     type: ObjectId,
    //     ref: 'comment'
    // }]// has many
}, {
    timestamps: true
})

module.exports = Post = mongoose.model('Post', PostSchema);