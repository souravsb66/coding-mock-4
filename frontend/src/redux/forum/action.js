import { GET_FORUM_DATA, GET_FORUM_DATA_FAILURE, GET_FORUM_DATA_SUCCESS, GET_SINGLE_QUESTION_SUCCESS } from "./actionType"

export const getForumData = () => {
    return ({type: GET_FORUM_DATA});
}

export const getForumDataFailure = () => {
    return ({type: GET_FORUM_DATA_FAILURE});
}

export const getForumDataSuccess = (payload) => {
    return ({type: GET_FORUM_DATA_SUCCESS, payload})
}

export const getSingleQuestionSuccess = (payload) => {
    return ({type: GET_SINGLE_QUESTION_SUCCESS, payload})
}