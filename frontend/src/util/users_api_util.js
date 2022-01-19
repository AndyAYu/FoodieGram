import axios from 'axios';

export const getAllUsers = () => (
    axios.get(`/api/users/`)
)


export const addFriend = userId => (
    axios.post(`/api/users`, {userId})
)

export const removeFriend = (friendId) => (
    axios.delete(`/api/users/${friendId}`)
)