import * as UserAPIUtil from '../util/users_api_util';
import * as PostAPIutil from '../util/post_api_util';

//action types
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const ADD_FRIEND = 'ADD_FRIEND';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_AVATAR_ERRORS= 'RECEIVE_AVATAR_ERRORS'

//actions
export const receiveAllUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users
});

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

const addFriend = friend => ({
    type: ADD_FRIEND,
    friend
});

const deleteFriend = friendInfo => ({
    type: DELETE_FRIEND,
    friendInfo
})

const receiveAvatarErrors = errors => {
    return {type: RECEIVE_AVATAR_ERRORS,
    errors
}}


// const addPost = post => ({
//     type: RECEIVE_POST,
//     post
// })

//thunk actions

export const fetchAllUsers = () => dispatch => (
    UserAPIUtil.getAllUsers()
        .then(users => dispatch(receiveAllUsers(users)))
);

export const fetchUser = () => dispatch => (
    UserAPIUtil.getUser()
        .then(user => dispatch(receiveUser(user)))
)

export const addFriendship = friendId => dispatch => (
    UserAPIUtil.addFriend(friendId)
        .then(friend => dispatch(addFriend(friend)))
)

export const deleteFriendship = (friendId) => dispatch => (
    UserAPIUtil.removeFriend(friendId)
        .then(friendId=> dispatch(deleteFriend(friendId)))
)

export const editAvatar = (user) => dispatch => (
    UserAPIUtil.editAvatar(user)
        .then(user => dispatch(receiveUser(user)))
        .catch(err => dispatch(receiveAvatarErrors(err.response.data)))
)

// export async function editAvatar(url){
//     debugger
//     const user = await fetch(url).then(data => data.json())

//     return (dispatch) => {
//         debugger
//         dispatch({
//             type: RECEIVE_USER,
//             payload: user
//         })
//     }
// }

// export const fetchPost = postId => dispatch => (
//     PostAPIutil.getPost(postId)
//         .then(post => dispatch(addPost(post)))
// )