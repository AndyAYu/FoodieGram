import * as ConvoAPIUtil from '../util/conversation_api_util';

export const RECEIVE_CONVO = 'RECEIVE_CONVO';

export const receiveConvo = convo => ({
    type: RECEIVE_CONVO,
    convo
})

export const createConvo = convo => dispatch => (
    ConvoAPIUtil.createConversation(convo)
    .then(convo => dispatch(receiveConvo(convo)))
)