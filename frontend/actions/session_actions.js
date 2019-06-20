import * as Util from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'; 
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors_array => ({
    type: RECEIVE_ERRORS,
    errors: errors_array
})

export const login = (user) => (dispatch) => (
    Util.signIn(user)
        .then(currUser => dispatch(receiveCurrentUser(currUser)))
)

export const signup = (user) => (dispatch) => (
    Util.signUp(user)
        .then(currUser => dispatch(receiveCurrentUser(currUser)))
)

export const logout = () => (dispatch) => (
    Util.signOut()
        .then(() => dispatch(logoutCurrentUser()))
)
