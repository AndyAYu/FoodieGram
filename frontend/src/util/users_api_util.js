import axios from 'axios';

export const getAllUsers = () => (
    axios.get(`/api/users/`)
)

export const getUser = user => (
    axios.get(`/api/users/user`)
)

export const addFriend = userId => (
    axios.post(`/api/users`, {userId})
)

export const removeFriend = (friendId) => (
    axios.delete(`/api/users/${friendId}`)
)

export const editAvatar = user => (
    axios.patch(`/api/users/${user.id}`, user)
)