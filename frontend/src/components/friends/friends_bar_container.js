import React from 'react';
import {connect} from 'react-redux'
import { addFriendship, deleteFriendship, fetchAllUsers } from '../../actions/user_actions';

import FriendsBar from './friends_bar'

const mSTP = state => ({
    
})

const mDTP = dispatch => ({
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    addFriend: (friendId) => dispatch(addFriendship(friendId)),
    removeFriend: (friendId) => dispatch(deleteFriendship(friendId))
})

export default connect(mSTP,mDTP)(FriendsBar)