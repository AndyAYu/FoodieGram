
import axios from 'axios';

export const createConversation = convo => {
    return axios.post(`/api/conversations`, convo)
}