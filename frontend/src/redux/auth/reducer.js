import { AUTH_REQUEST, AUTH_REQUEST_FAILURE, AUTH_REQUEST_SUCCESS, LOGOUT_REQUEST } from "./actionType"

const initState = {
    isLoading: false,
    isError: false,
    isAuth: false,
    user: {}
}

export const reducer = (state=initState, {type, payload}) => {

    switch(type) {
        case AUTH_REQUEST:
            return {...state, isLoading: true};
        case AUTH_REQUEST_FAILURE:
            return {...state, isLoading: false, isError: true};
        case AUTH_REQUEST_SUCCESS:
            return {...state, isLoading: false, isError: false, isAuth: true, user: {...payload}};
        case LOGOUT_REQUEST:
            return {...initState};
        default:
            return {...state}
    }
}