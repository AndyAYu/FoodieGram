import React from 'react';
import {connect} from 'react-redux'
import { createConvo } from '../../actions/conversation_actions';

import LiveChatFriendsBar from './livechat_friend'

const mSTP = state => {
    // debugger
    if(state.entities.users && state.session.user){
        let currentUserId = state.session.user.id
        let currentUserIndex = state.entities.users.findIndex(user => user._id === currentUserId)
        let currentUser = state.entities.users[currentUserIndex]
        let currentUserFriends = currentUser.friends
        return({
            currentUserId: currentUserId,
            currentUserIndex: currentUserIndex,
            currentUser : currentUser,
            currentUserFriends : currentUserFriends,
            allUsers : state.entities.users
        })
    }
    else{ return{}}
    
}

const mDTP = dispatch => ({
    createConvo: convo => dispatch(createConvo(convo))
})

export default connect(mSTP,mDTP)(LiveChatFriendsBar)