import { connect } from 'react-redux';
import { editAvatar } from '../../actions/user_actions';
import AvatarBank from "./avatarbank";

const mSTP = (state, ownProps) => ({
    showAvatars: ownProps.showAvatars,
    users: state.entities.users
})

const mDTP = (dispatch, ownProps) => {
    return {
        editAvatar: user => dispatch(editAvatar(user)),
        hideAvatars:() => ownProps.hideAvatars(),
}};

export default connect(mSTP, mDTP)(AvatarBank);