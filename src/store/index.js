import { createStore } from "redux";
import ActionTypes from "../types/action";

/**
 * @param {hash} state store statement
 * @param {hash} action action paramater
 * @returns {hash} store statement
 **/
function rootReducer(state = {}, action) {
    switch (action.type) {
        case ActionTypes.CHANGE_TEXT:
            return {
                code: action.code
            };

        default:
            return state;
    }
}

/**
 * @param {hash} initialState inital state
 * @returns {Redux.store} return redux store
 **/
export default function configureStore(initialState) {
    return createStore(rootReducer, initialState);
}
