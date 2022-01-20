import { combineReducers } from 'redux';
import PostErrorsReducer from './post_errors_reducer';
import SessionErrorsReducer from './session_errors_reducer';

const errorsReducer = combineReducers({
    session: SessionErrorsReducer,
    post: PostErrorsReducer
});

export default errorsReducer;