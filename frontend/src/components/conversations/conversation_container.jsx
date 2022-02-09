import React from 'react';
import {connect} from 'react-redux'
import Conversation from './conversation';

const mSTP = state => {
    if(state.entities.users && state.session.user){
        return({
            allUsers : state.entities.users,
        })
    }
    else{ return{}}
    
}

const mDTP = dispatch => ({

})

export default connect(mSTP,mDTP)(Conversation)
