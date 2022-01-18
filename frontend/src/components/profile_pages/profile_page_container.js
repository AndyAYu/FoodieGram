import {connect} from "react-redux";
import { getAllPosts } from "../../util/post_api_util";
import ProfilePage from "./profile_page";

const mSTP = state => ({
    loggedIn: state.session.isAuthenticated
})

const mDTP = dispatch => ({
    fetchPost: () => dispatch(getAllPosts())
    // fetchFriends: () => dispatch(fetchFriends())
})


export default connect(mSTP,mDTP)(ProfilePage)