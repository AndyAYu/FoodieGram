import * as PostAPIutil from '../util/post_api_util';

//action types
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_EDITED_POST = 'RECEIVE_EDITED_POST';
export const REMOVE_POST = 'REMOVE_POST';

//actions
export const receiveAllPosts = posts => ({
    type: RECEIVE_ALL_POSTS,
    posts
})

export const receivePost = post => ({
    type: RECEIVE_POST,
    post
})

export const receiveEditedPost = post => ({
    type: RECEIVE_EDITED_POST,
    post
})

export const removePost = postId => ({
    type: REMOVE_POST,
    postId
})

//thunk action
export const getAllPosts = (data) => dispatch => (
    PostAPIutil.getAllPosts(data)
    .then(posts => dispatch(receiveAllPosts(posts)))
)

export const getPost = postId => dispatch => (
    PostAPIutil.getPost(postId)
    .then(post => dispatch(receivePost(post)))
)

export const createPost = post => dispatch => (
    PostAPIutil.createPost(post)
    .then(post => dispatch(receivePost(post)))
)

export const editPost = post => dispatch => (
    PostAPIutil.editPost(post)
    .then(post => dispatch(receiveEditedPost(post)))
)

export const deletePost = postId => dispatch => (
    PostAPIutil.deletePost(postId)
    .then(() => dispatch(removePost(postId)))
)