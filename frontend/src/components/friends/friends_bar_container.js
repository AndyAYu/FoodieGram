// import React from 'react';
import {connect} from 'react-redux'
// import { addFriendship, deleteFriendship, fetchAllUsers } from '../../actions/user_actions';

import FriendsBar from './friends_bar'

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

})

export default connect(mSTP,mDTP)(FriendsBar)