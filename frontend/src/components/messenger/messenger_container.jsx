import { connect } from 'react-redux';
import Messenger from './messenger';
import { createConvo } from '../../actions/conversation_actions';

const mSTP = state => {
    
    let currentUserId = state.session.user.id
    let currentUserIndex = state.entities.users.findIndex(user => user._id === currentUserId)
    let currentUser = state.entities.users[currentUserIndex]
    let currentUserFriends = currentUser.friends
    return({
        currentUserId: currentUserId,
        currentUserIndex: currentUserIndex,
        currentUser : currentUser,
        currentUserFriends : currentUserFriends,
        allUsers : state.entities.users,
        currentUser: state.session.user,
        convo: state.entities.convo,
    })
    
};

const mDTP = dispatch => ({
    createConvo: convo => dispatch(createConvo(convo))
});

export default connect(
    mSTP, mDTP
)(Messenger);