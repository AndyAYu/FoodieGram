import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

import NavBar from './navbar';

const mapStateToProps = state => {
    let currentUserId
    if(state.session.user){
        currentUserId = state.session.user.id 
    }
    return(
        {
            loggedIn: state.session.isAuthenticated,
            currentUser: currentUserId
        }
    )
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
});

export default connect(
    mapStateToProps, mDTP
)(NavBar);