import { AUTH_REQUEST_FAILURE, AUTH_REQUEST_SUCCESS } from "./actionType";

export const authRequest = () => {
    return ({type: AUTH_REQUEST});
}

export const authRequestFailure = () => {
    return ({type: AUTH_REQUEST_FAILURE});
}

export const authRequestSuccess = (payload) => {
    return ({type: AUTH_REQUEST_SUCCESS, payload})
}