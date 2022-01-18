import {
    RECEIVE_ALL_USERS,
    RECEIVE_USER
} from '../actions/user_actions';

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState= Object.assign({}, oldState)
    // debugger
    switch(action.type){
        case RECEIVE_ALL_USERS:
            return action.users.data;
        default:
            return oldState;
    }
}

export default usersReducer;