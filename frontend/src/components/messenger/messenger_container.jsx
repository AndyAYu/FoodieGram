import { connect } from 'react-redux';
import Messenger from './messenger';

const mSTP = state => ({
    currentUser: state.session.user
});

const mDTP = dispatch => ({
    
});

export default connect(
    mSTP, mDTP
)(Messenger);