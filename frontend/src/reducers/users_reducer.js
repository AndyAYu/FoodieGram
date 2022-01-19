import {
    RECEIVE_ALL_USERS,
    ADD_FRIEND,
    DELETE_FRIEND
} from '../actions/user_actions';

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState)
    debugger
    switch(action.type){
        case RECEIVE_ALL_USERS:
            return action.users.data;
        case ADD_FRIEND:
            let currentUser = oldState.find(key => oldState[key].id === action.friend.data.friendId )
            nextState[currentUser.id].push(action.friend.data.friendId)
            return oldState;
        case DELETE_FRIEND:
            return oldState;
        default:
            return oldState;
    }
}

export default usersReducer;