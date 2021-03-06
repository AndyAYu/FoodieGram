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

    restaurant: {
        type: String,
        required: true
    },
    
    date: {
        type: Date,
        default: Date.now
    },

    postImg: {
        type: String,
        required: true
    },

    likes: [{ 
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],

    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    
}, {
    timestamps: true
})

module.exports = Post = mongoose.model('Post', PostSchema);