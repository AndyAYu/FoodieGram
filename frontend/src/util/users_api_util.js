import axios from 'axios';

export const getAllUsers = () => (
    axios.get(`/api/users/`)
)


export const addFriend = friendId => (
    axios.post(`/api/users`, {friendId})
)

export const removeFriend = friendId => (
    axios.delete(`/api/users/${friendId}`)
)