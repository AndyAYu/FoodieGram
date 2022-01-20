import {
    RECEIVE_POST_ERRORS,
    RECEIVE_POST,
    REMOVE_POST_ERRORS
} from '../actions/post_actions';

const _nullErrors = [];

const PostErrorsReducer = (state = _nullErrors, action) => {
    // debugger
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_POST_ERRORS:
            return action.errors;
        case RECEIVE_POST:
            return _nullErrors;
        case REMOVE_POST_ERRORS:
            return {};
        default:
            return state;
    }
};

export default PostErrorsReducer;