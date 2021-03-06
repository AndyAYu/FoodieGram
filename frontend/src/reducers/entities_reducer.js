import { combineReducers } from 'redux';
import commentsReducer from './comments_reducer';
import postsReducer from './posts_reducer';
import usersReducer from './users_reducer';
import conversationReducer from './conversation_reducer';
import likesReducer from './likes_reducer';

const entitiesReducer = combineReducers ({
    posts: postsReducer,
    comments: commentsReducer,
    users: usersReducer,
    convo: conversationReducer,
    likes: likesReducer
})

export default entitiesReducer