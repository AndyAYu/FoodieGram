import {connect} from "react-redux";
import { receiveAllPosts } from '../../actions/post_actions'
import { receiveAllUsers, receiveUser, fetchAllUsers} from '../../actions/user_actions'
import ProfilePage from "./profile_page";

const mSTP = state => ({
    loggedIn: state.session.isAuthenticated,
    users: state.entities.users
})

const mDTP = dispatch => ({
    fetchAllPosts: () => dispatch(receiveAllPosts()),
    fetchUser: userId => dispatch(receiveUser(userId)),
    fetchAllUsers: () => dispatch(fetchAllUsers())
    // fetchFriends: () => dispatch(fetchFriends())
})


export default connect(mSTP,mDTP)(ProfilePage)  