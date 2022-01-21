import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

import NavBar from './navbar';

const mapStateToProps = state => {
 
    if(state.session.user && state.entities.users){
        // debugger
        let currentUserId = state.session.user.id 
        let currentUserIndex = state.entities.users.findIndex(user => user._id === currentUserId)
    return(
        {
            loggedIn: state.session.isAuthenticated,
            currentUser: currentUserId,
            currentUserIndex: currentUserIndex
        }
    )}
    else return null;
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
});

export default connect(
    mapStateToProps, mDTP
)(NavBar);