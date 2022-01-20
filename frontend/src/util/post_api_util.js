import axios from 'axios';

export const getAllPosts = (data) => {
    return axios.get(`/api/users/posts/`, data)
}

export const getPost = (postId) => {
    return axios.get(`/api/users/posts/${postId}`, postId)
};

export const createPost = (post) => {
    debugger
    return axios.post(`/api/users/posts/`, post)
};

export const editPost = (post) => {
    return axios.patch(`/api/users/posts/${post.id}`, post)
};

export const deletePost = (postId) => {
    return axios.delete(`/api/users/posts/${postId}`)
}