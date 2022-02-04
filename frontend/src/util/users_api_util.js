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

export const editAvatar = user => (
    axios.patch(`/api/users/${user._id}`, user)
)