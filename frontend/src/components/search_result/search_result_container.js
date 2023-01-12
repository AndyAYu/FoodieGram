import { connect } from "react-redux";
// import React from 'react';
import { fetchAllUsers } from '../../actions/user_actions';

import SearchResult from './search_result'

const mSTP = state => {
    if(state.entities.users){
        return({
            users: state.entities.users
        })
    }else return {};
}

const mDTP = dispatch => ({
    fetchAllUsers: () => dispatch(fetchAllUsers())
    
})

export default connect(mSTP, mDTP)(SearchResult)