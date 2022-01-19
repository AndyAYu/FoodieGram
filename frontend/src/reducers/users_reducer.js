import {
    RECEIVE_ALL_USERS,
    ADD_FRIEND,
    DELETE_FRIEND
} from '../actions/user_actions';

const usersReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    let nextState = oldState.slice();
    // debugger
    switch(action.type){
        case RECEIVE_ALL_USERS:
            return action.users.data;
        case ADD_FRIEND:
            return oldState;
        case DELETE_FRIEND:
            return oldState;
        default:
            return oldState;
    }
}

export default usersReducer;