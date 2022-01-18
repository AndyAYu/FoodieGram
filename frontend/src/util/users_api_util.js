import axios from 'axios';

export const getAllUsers = () => {
    return axios.get(`/api/users`)
}

export const getUser = userId  => (
    axios.get(`/api/users/${userId}`)
)