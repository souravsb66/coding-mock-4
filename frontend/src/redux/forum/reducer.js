import { ADD_QUESTION_REQUEST, GET_FORUM_DATA, GET_FORUM_DATA_FAILURE, GET_FORUM_DATA_SUCCESS, GET_SINGLE_QUESTION, GET_SINGLE_QUESTION_SUCCESS } from "./actionType"

const initState = {
    isLoading: false,
    isError: false,
    forumData: [],
    singleData: {}
}

export const reducer = (state=initState, {type, payload}) => {

    switch(type) {
        case GET_FORUM_DATA:
            return {...state, isLoading: true};
        case GET_FORUM_DATA_FAILURE:
            return {...state, isLoading: false, isError: true};
        case GET_FORUM_DATA_SUCCESS:
            return {...state, isLoading: false, isError: false, forumData: [...payload]};
        case GET_SINGLE_QUESTION_SUCCESS:
            return {...state, singleData: {...payload}};
        case ADD_QUESTION_REQUEST:
            return {...state, forumData: [...state.forumData, payload]}
        default:
            return {...state}
    }
}