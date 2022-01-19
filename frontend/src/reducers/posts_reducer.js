import {
    RECEIVE_ALL_POSTS,
    RECEIVE_POST,
    RECEIVE_EDITED_POST,
    REMOVE_POST
} from '../actions/post_actions';

const postsReducer = (state = {}, action) => {
    Object.freeze(state);
    
    let nextState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_ALL_POSTS:
            nextState = action.posts.data;
            return nextState;
        case RECEIVE_POST:
            return action.post.data;
        case REMOVE_POST:
            delete nextState[action.post.id];
            return nextState;
        case RECEIVE_EDITED_POST:
            for (let i = 0; i < state.length; i++) {
                if (state[i].id !== action.post.id) {
                    nextState.push(state[i]);
                } else {
                    nextState.push(action.post);
                }
            }
            return nextState;
        default:
            return state;
    }
};

export default postsReducer;