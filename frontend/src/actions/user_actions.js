import * as UserAPIUtil from '../util/users_api_util';

//action types
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

//actions
export const receiveAllUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users
});

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

//thunk actions

export const fetchAllUsers = () => dispatch => (
    UserAPIUtil.getAllUsers()
        .then(users => dispatch(receiveAllUsers(users)))
);

export const fetchUser = user => dispatch =>(
    UserAPIUtil.getUser(user.id)
        .then(user => dispatch(receiveUser(user)))
)