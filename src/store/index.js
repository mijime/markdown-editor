// @flow
import { createStore } from "redux";
import { rootReducer } from "../reducers";

/* flow-include
import type { MainState } from "../types";
*/

/**
 * @param {MainState} initialState inital state
 * @returns {Object} return redux store
 **/
export function configureStore(initialState) {
    return createStore(rootReducer, initialState);
}
