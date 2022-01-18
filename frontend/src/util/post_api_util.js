import axios from 'axios';

export const getAllPosts = (data) => {
    return axios.get(`/api/posts/`, data)
}

export const getPost = (postId) => {
    return axios.get(`/api/posts/${postId}`, postId)
};

export const createPost = (post) => {
    return axios.post(`/api/posts/`, post)
};

export const editPost = (post) => {
    return axios.patch(`/api/posts/${post}`)
};

export const deletePost = (postId) => {
    return axios.delete(`/api/posts/${postId}`)
}