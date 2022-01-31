import {
    RECEIVE_ALL_POSTS,
    RECEIVE_POST,
    RECEIVE_EDITED_POST,
    REMOVE_POST
} from '../actions/post_actions';

const postsReducer = (state = {}, action) => {
    Object.freeze(state);
    // debugger
    let nextState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_ALL_POSTS:
            action.posts.data.forEach(post => nextState[post._id] = post);
            return nextState;
        case RECEIVE_POST:
            nextState[action.post.data._id] = action.post.data;
            return nextState;
        case REMOVE_POST:
            delete nextState[action.postId]
            return nextState;
        // case RECEIVE_EDITED_POST:
        //     return [action.post];
        default:
            return state;
    }
};

export default postsReducer;