// @flow
import { createStore } from "redux";
import { rootReducer } from "../reducers";

/**
 * @param {Object} initialState inital state
 * @returns {Object} return redux store
 **/
export function configureStore(initialState) {
    return createStore(rootReducer, initialState);
}
