import {
    RECEIVE_CONVO,
} from '../actions/conversation_actions';

const conversationReducer = (state = null, action) => {
    Object.freeze(state);

    // let nextState = Object.assign({}, state)
    switch(action.type) {
        
        case RECEIVE_CONVO:
            return action.convo;
    
        default:
            return state;
    }
}

export default conversationReducer