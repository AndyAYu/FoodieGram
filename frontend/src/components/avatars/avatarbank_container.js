import { connect } from 'react-redux';
import { editAvatar } from '../../util/users_api_util';
import AvatarBank from "./avatarbank";

const mSTP = (state, ownProps) => ({
    showAvatars: ownProps.showAvatars,
})

const mDTP = (dispatch, ownProps) => {
    return {editAvatar: avatar => dispatch(editAvatar(avatar)),
        hideAvatars:() => ownProps.hideAvatars(),
}};

export default connect(mSTP, mDTP)(AvatarBank);