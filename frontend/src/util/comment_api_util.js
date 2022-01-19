import axios from 'axios';

export const getAllComments = (postId, page ) => {
    return axios.get(`/api/posts/${postId}/comments/`, page)
} 

export const getComment = (postId, commentId) => {
    return axios.get(`/api/posts/${postId}/comments/${commentId}`, )
}

export const createComment = comment => {
    return axios.post(`/api/comments/`, comment)
}

export const editComment = comment => {
    return axios.patch(`/api/comments/${comment.id}`, comment)
}

export const deleteComment = commentId => {
    return axios.delete(`/api/comments/${commentId}`)
}