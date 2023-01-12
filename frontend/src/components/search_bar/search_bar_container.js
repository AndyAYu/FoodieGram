// import React from 'react';
import {connect} from 'react-redux'
import { fetchAllUsers } from '../../actions/user_actions';
import SearchBar from './search_bar';

const mSTP = state => {
    // debugger
    if (state.entities.users){
        return({
            users: state.entities.users
        })
    }else return {};
}

const mDTP = dispatch => ({
    fetchAllUsers: () => dispatch(fetchAllUsers())
})

export default connect(mSTP,mDTP)(SearchBar);