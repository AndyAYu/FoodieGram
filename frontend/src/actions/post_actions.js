import * as PostAPIutil from '../util/post_api_util';

//action types
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_EDITED_POST = 'RECEIVE_EDITED_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";
export const REMOVE_POST_ERRORS = "REMOVE_POST_ERRORS";


//actions
export const receiveAllPosts = posts => ({
    type: RECEIVE_ALL_POSTS,
    posts
})

export const receivePost = post => {
  return  {
    type: RECEIVE_POST,
    post
}}

export const receiveEditedPost = post => {
  debugger  
    return {
    type: RECEIVE_EDITED_POST,
    post
}}

export const removePost = postId => ({
    type: REMOVE_POST,
    postId
})

export const receivePostErrors = errors => {
    return {type: RECEIVE_POST_ERRORS,
    errors
}}

export const removePostErrors = () => {
    return {type: REMOVE_POST_ERRORS
}}


//thunk action
export const getAllPosts = () => dispatch => (
    PostAPIutil.getAllPosts()
    .then(posts => dispatch(receiveAllPosts(posts)))
)

export const getPost = postId => dispatch => (
    PostAPIutil.getPost(postId)
    .then(post => dispatch(receivePost(post.data)))
)

export const createPost = post => dispatch => {
    debugger
 return   PostAPIutil.createPost(post)
    .then(post => dispatch(receivePost(post)))
    .catch(err => dispatch(receivePostErrors(err.response.data)))
}

export const editPost = post => dispatch => (
    PostAPIutil.editPost(post)
    .then(post => dispatch(receiveEditedPost(post)))
    .catch(err => dispatch(receivePostErrors(err.response.data)))
)

export const deletePost = postId => dispatch => (
    PostAPIutil.deletePost(postId)
    .then(() => dispatch(removePost(postId)))
)