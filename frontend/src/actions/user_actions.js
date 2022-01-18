import * as UserAPIUtil from '../util/users_api_util';

//action types
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

//actions
const receiveAllUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users
});

const receiveUser = userId => ({
    type: RECEIVE_USER,
    userId
});

//thunk actions

export const fetchAllUsers = () => dispatch => (
    UserAPIUtil.getAllUsers()
        .then(users => dispatch(receiveAllUsers(users)))
);

export const fetchUser = userId => dispatch =>(
    UserAPIUtil.getUser(userId)
        .then(userId => dispatch(receiveUser(userId)))
)