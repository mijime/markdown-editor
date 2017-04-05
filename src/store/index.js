// @flow
import { createStore } from "redux";
import { rootReducer } from "../reducers";

/**
 * @param {any} initialState inital state
 * @returns {any} return redux store
 **/
export function configureStore(initialState/* :any*/) {
    return createStore(rootReducer, initialState);
}
