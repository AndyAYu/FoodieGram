import {
    RECEIVE_ALL_COMMENTS,
    RECEIVE_COMMENT,
    REMOVE_COMMENT,
    RECEIVE_EDITED_COMMENT
} from '../actions/comment_actions';

const commentsReducer = (state = null, action) => {
    let nextState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_ALL_COMMENTS:
            return action.comments;
        case RECEIVE_COMMENT:
            return action.comment;
        case RECEIVE_EDITED_COMMENT:
            for (let i = 0; i < state.length; i++) {
                if (state[i].id !== action.comment.id) {
                    nextState.push(state[i]);
                } else {
                    nextState.push(action.comment);
                }
            }
            return nextState;
        case REMOVE_COMMENT:   
            delete nextState[action.comment.id];
            return nextState;
        default:
            return state;
    }
}

export default commentsReducer