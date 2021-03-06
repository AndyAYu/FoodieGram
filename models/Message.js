const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema (
    {
        conversationId:{
            type: String,
        },
        sender: {
            type: String,
        },
        text: {
            type: String,
            required: true
        },
    },
   { timestamps: true }
);

module.exports = Message = mongoose.model('Message', MessageSchema);