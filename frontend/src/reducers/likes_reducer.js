import {
    RECEIVE_LIKE,
    DELETE_LIKE,
    RECEIVE_ALL_POSTS
} from '../actions/post_actions';

const likesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_ALL_POSTS:
            action.posts.data.forEach(post => nextState[post._id] = post.likes);
            return nextState;
        case RECEIVE_LIKE:
            nextState[action.post._id] = action.post.likes;
            return nextState;
        case DELETE_LIKE:
            const likeArray = nextState[action.post.data.postId]
            const likedUser = likeArray.indexOf(action.post.data.userId);
            likeArray.splice(likedUser, 1);
            return nextState;
        default:
            return state;
    }
};

export default likesReducer;