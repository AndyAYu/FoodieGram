import {connect} from "react-redux";
import { receiveAllPosts } from '../../actions/post_actions'
import {fetchAllUsers, fetchUser, addFriendship, deleteFriendship} from '../../actions/user_actions'
import ProfilePage from "./profile_page";

const mSTP = state => {
    if (state.entities.users && state.entities.users.length > 1){
        let currentUserId= state.session.user.id
        let currentUserIndex = state.entities.users.findIndex(user => user._id === currentUserId)
        let currentUser = state.entities.users[currentUserIndex]
        let currentUserAvatar = state.session.user.avatar
    return({
        loggedIn: state.session.isAuthenticated,
        currentUserIndex: currentUserIndex,
        currentUserId: currentUserId,
        currentUser: currentUser,
        avatar: currentUserAvatar,
        users: state.entities.users,
    })
    }
    else{ return{}}
}

const mDTP = dispatch => ({
    fetchAllPosts: () => dispatch(receiveAllPosts()),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchUser: (user) => dispatch(fetchUser(user)),
    addFriend: (friendId) => dispatch(addFriendship(friendId)),
    removeFriend: (friendId) => dispatch(deleteFriendship(friendId))
    // fetchFriends: () => dispatch(fetchFriends())
})


export default connect(mSTP,mDTP)(ProfilePage)  