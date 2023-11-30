import { AUTH_REQUEST, AUTH_REQUEST_FAILURE, AUTH_REQUEST_SUCCESS, LOGOUT_REQUEST } from "./actionType";

export const authRequest = () => {
    return ({type: AUTH_REQUEST});
}

export const authRequestFailure = () => {
    return ({type: AUTH_REQUEST_FAILURE});
}

export const authRequestSuccess = (payload) => {
    return ({type: AUTH_REQUEST_SUCCESS, payload})
}

export const logoutRequest = () => {
    return ({type: LOGOUT_REQUEST});
}