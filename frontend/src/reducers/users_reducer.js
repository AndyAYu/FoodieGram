import {
    RECEIVE_ALL_USERS,
    RECEIVE_USER
} from '../actions/user_actions';

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch(action.type){
        case RECEIVE_ALL_USERS:
            return action.users;
        case RECEIVE_USER:
            return action.users[action.userId]
        default:
            return oldState;
    }
}

export default usersReducer;