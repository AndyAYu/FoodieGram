import axios from 'axios';

export const getAllPosts = () => {
    return axios.get(`/api/users/posts/`)
}

export const getPost = (postId) => {
    return axios.get(`/api/users/posts/${postId}`, postId)
};

export const createPost = (post) => {
    return axios.post(`/api/users/posts/`, post)
};

export const editPost = (post) => {
    return axios.patch(`/api/users/posts/${post.get('_id')}`, post)
};

export const deletePost = (postId) => {
    return axios.delete(`/api/users/posts/${postId}`)
}

export const addLike = post => {
    return axios.post(`/api/users/posts/like/${post.postId}`, post)
}

export const removeLike = post => {
    return axios.put(`/api/users/posts/like/${post.postId}`, post)
}