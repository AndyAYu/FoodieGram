import * as CommentAPIutil from '../util/comment_api_util';
//type
export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_EDITED_COMMENT = 'RECEIVE_EDITED_COMMENT';
//action
export const receiveAllComments = comments => ({
    type: RECEIVE_ALL_COMMENTS,
    comments
})

export const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
})

export const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
})

export const receiveEditedComment = comment => ({
    type: RECEIVE_EDITED_COMMENT,
    comment
})
//thunk
export const getAllComments = (postId, page) => dispatch => (
    CommentAPIutil.getAllComments(postId, page)
    .then(comments => dispatch(receiveAllComments(comments)))
)

export const getComment = commentId => dispatch => (
    CommentAPIutil.getComment(commentId)
    .then(comment => dispatch(receiveComment(comment)))
)

export const createComment = comment => dispatch => (
    CommentAPIutil.createComment(comment)
    .then(comment => dispatch(receiveComment(comment)))
)

export const editComment = comment => dispatch => (
    CommentAPIutil.editComment(comment)
    .then(comment => dispatch(receiveEditedComment(comment)))
)

export const deleteComment = commentId => dispatch => (
    CommentAPIutil.deleteComment(commentId)
    .then(() => dispatch(removeComment(commentId)))
)