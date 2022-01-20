import {
    RECEIVE_ALL_POSTS,
    RECEIVE_POST,
    RECEIVE_EDITED_POST,
    REMOVE_POST
} from '../actions/post_actions';

const postsReducer = (state = [], action) => {
    Object.freeze(state);
    
    let nextState = state.slice();
    switch(action.type) {
        case RECEIVE_ALL_POSTS:
            return action.posts.data;
        case RECEIVE_POST:
            nextState.unshift(action.post.data);
            return nextState;
        case REMOVE_POST:
            nextState.forEach((post, idx, object) => {
                if (post._id === action.postId) {
                    object.splice(idx, 1);
                }
            })
            return nextState;
        case RECEIVE_EDITED_POST:
            // for (let i = 0; i < state.length; i++) {
            //     if (state[i].id !== action.post.id) {
            //         nextState.push(state[i]);
            //     } else {
            //         nextState.push(action.post);
            //     }
            // }
            // debugger
            nextState.unshift(action.post.data);

            nextState.forEach((post, idx, object) => {
                if (post._id === action.post.data._id) {
                    object.splice(idx, 1);
                }
            });
            return nextState;
        default:
            return state;
    }
};

export default postsReducer;