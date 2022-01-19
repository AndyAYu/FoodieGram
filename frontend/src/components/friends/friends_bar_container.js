import React from 'react';
import {connect} from 'react-redux'
import { addFriendship, deleteFriendship, fetchAllUsers } from '../../actions/user_actions';

import FriendsBar from './friends_bar'

const mSTP = state => {
    debugger
    if(state.entities.users && state.session.user){
        let currentUserId = state.session.id
        state.entities.users.filter((user,i) =>  user)
        return({
            currentUserId: currentUserId
        })
    }
    else{ return{}}
    
}

const mDTP = dispatch => ({
    fetchAllUsers: () => dispatch(fetchAllUsers()),
})

export default connect(mSTP,mDTP)(FriendsBar)