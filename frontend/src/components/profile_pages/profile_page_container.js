import {connect} from "react-redux";
import { receiveAllPosts } from '../../actions/post_actions'
import {fetchAllUsers, addFriendship, deleteFriendship} from '../../actions/user_actions'
import ProfilePage from "./profile_page";

const mSTP = state => ({
    loggedIn: state.session.isAuthenticated,
    users: state.entities.users,
    currentUser: state.session.user.id
})

const mDTP = dispatch => ({
    fetchAllPosts: () => dispatch(receiveAllPosts()),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    addFriend: (friendId) => dispatch(addFriendship(friendId)),
    removeFriend: (friendId) => dispatch(deleteFriendship(friendId))
    // fetchFriends: () => dispatch(fetchFriends())
})


export default connect(mSTP,mDTP)(ProfilePage)  