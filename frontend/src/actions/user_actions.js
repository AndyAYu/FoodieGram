import * as UserAPIUtil from '../util/users_api_util';

//action types
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const ADD_FRIEND = 'ADD_FRIEND';
export const DELETE_FRIEND = 'DELETE_FRIEND'

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
        .then((friend)=> dispatch(deleteFriend(friend)))
)