import {connect} from "react-redux";
import { receiveAllPosts } from '../../actions/post_actions'
import {fetchAllUsers, addFriendship, deleteFriendship} from '../../actions/user_actions'
import ProfilePage from "./profile_page";

const mSTP = state => {
  console.log(state)
    if (state.entities.users && state.entities.users.length > 1){
        let currentUserId= state.session.user.id
        debugger
        let currentUserIndex = state.entities.users.findIndex(user => user._id === currentUserId)
        debugger
        let currentUser = state.entities.users[currentUserIndex]
        debugger
        let currentUserAvatar = currentUser.avatar
    return({
        loggedIn: state.session.isAuthenticated,
        currentUserIndex: currentUserIndex,
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
    addFriend: (friendId) => dispatch(addFriendship(friendId)),
    removeFriend: (friendId) => dispatch(deleteFriendship(friendId))
    // fetchFriends: () => dispatch(fetchFriends())
})


export default connect(mSTP,mDTP)(ProfilePage)  