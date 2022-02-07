import {
    RECEIVE_ALL_USERS,
    ADD_FRIEND,
    DELETE_FRIEND,
    RECEIVE_POST,
} from '../actions/user_actions';

const usersReducer = (oldState = [], action) => {
    console.log(action)
    Object.freeze(oldState);
    let nextState = oldState.slice();
    let index;
    // debugger
    switch(action.type){
        case RECEIVE_ALL_USERS:
            return action.users.data;
        case ADD_FRIEND:
            // let currentUser = oldState.find(key => oldState[key].id === action.friend.data.currentUserId )
            nextState.forEach((user,i) => {
                if(action.friend.data.currentUserId === user._id){ index = i}
            })
            if (!nextState[index].friends.includes(action.friend.data.friendId)) nextState[index].friends.push(action.friend.data.friendId)
            return nextState;
        // case RECEIVE_POST:
        //     nextState.forEach((user, i) => {
        //         if (action.post.data.currentUserId === user._id) { index = i }
        //     })
        //     if (!nextState[index].posts.includes(action.post.data.postId)) nextState[index].posts.push(action.post.data.postId)
        //     return nextState;
        case DELETE_FRIEND:
            nextState.forEach((user, i) => {
                if (action.friendInfo.data.currentUserId === user._id) { index = i }
            })
            nextState[index].friends = nextState[index].friends.filter(friend => friend !== action.friendInfo.config.url.split('/')[3] && friend !== null)
            return nextState;
        default:
            return oldState;
    }
}

export default usersReducer;