import { combineReducers, legacy_createStore } from "redux";
import { reducer as authReducer } from "./auth/reducer";
import { reducer as forumReducer } from "./forum/reducer";

export const baseURL = "https://stack-overflow-mockapi.onrender.com";

const rootReducer = combineReducers({
    authReducer,
    forumReducer
})

export const store = legacy_createStore(rootReducer);