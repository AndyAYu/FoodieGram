import {connect} from "react-redux";
import ProfilePage from "./profile_page";

const mSTP = state => ({
    loggedIn: state.session.isAuthenticated
})

const mDTP = dispatch => ({
    // fetchPost: postId => dispatch(fetchPost(postId))
    // fetchFriends: () => dispatch(fetchFriends())
})


export default connect(mSTP,mDTP)(ProfilePage)