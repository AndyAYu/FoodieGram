import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state) => {
    return {
        signedIn: state.session.isSignedIn,
        errors: state.errors.session,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signup: user => dispatch(signup(user)),
        login: user => dispatch(login(user)),
         otherForm: (
      <button onClick={() => dispatch(closeModal('login'))}>
        Login
      </button>
    ),
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupForm);