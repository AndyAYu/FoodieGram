import * as PostAPIutil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_EDITED_POST = 'RECEIVE_EDITED_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";
export const REMOVE_POST_ERRORS = "REMOVE_POST_ERRORS";
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const DELETE_LIKE = 'DELETE_LIKE';

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

export const receiveLike = post => {
    return {
        type: RECEIVE_LIKE,
        post
    }
}

export const deleteLike = post => {
    return {
        type: DELETE_LIKE,
        post
    }
}

export const getAllPosts = () => dispatch => (
    PostAPIutil.getAllPosts()
    .then(posts => dispatch(receiveAllPosts(posts)))
)

export const getPost = postId => dispatch => (
    PostAPIutil.getPost(postId)
    .then(post => dispatch(receivePost(post.data)))
)

export const createPost = post => dispatch => {
 return   PostAPIutil.createPost(post)
    .then(post => dispatch(receivePost(post)))
    .catch(err => dispatch(receivePostErrors(err.response.data)))
}

export const editPost = post => dispatch => (
    PostAPIutil.editPost(post)
    .then(post => dispatch(receivePost(post)))
    .catch(err => dispatch(receivePostErrors(err.response.data)))
)

export const deletePost = postId => dispatch => (
    PostAPIutil.deletePost(postId)
    .then(() => dispatch(removePost(postId)))
)

export const addLike = post => dispatch => (
    PostAPIutil.addLike(post)
    .then(post => dispatch(receiveLike(post.data)))
)

export const removeLike = post => dispatch => (
    PostAPIutil.removeLike(post)
    .then(post => dispatch(deleteLike(post)))
)