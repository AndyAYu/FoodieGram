import * as UserAPIUtil from '../util/users_api_util';
import * as PostAPIutil from '../util/post_api_util';

//action types
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const ADD_FRIEND = 'ADD_FRIEND';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const RECEIVE_POST = 'RECEIVE_POST';

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

const deleteFriend = friendId => ({
    type: DELETE_FRIEND,
    friendId
})

const addPost = post => ({
    type: RECEIVE_POST,
    post
})

//thunk actions

export const fetchAllUsers = () => dispatch => (
    UserAPIUtil.getAllUsers()
        .then(users => dispatch(receiveAllUsers(users)))
);


export const addFriendship = friendId => dispatch =>(
    UserAPIUtil.addFriend(friendId)
        .then(friend => dispatch(addFriend(friend)))
)

export const deleteFriendship = (friendId) => dispatch => (
    UserAPIUtil.removeFriend(friendId)
        .then(()=> dispatch(deleteFriend(friendId)))
)

export const fetchPost = postId => dispatch => (
    PostAPIutil.getPost(postId)
        .then(post => dispatch(addPost(post)))
)