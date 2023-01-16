const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FriendSchema = new Schema({
    friend:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    // friend2:{
    //     type: Schema.Types.ObjectId,
    //     ref: 'User'
    // }
})

module.exports = Friend = mongoose.model('Friend', FriendSchema)