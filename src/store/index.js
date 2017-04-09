// @flow
/* ::
import type { MainState } from "../types";
*/
import { createStore } from "redux";
import { rootReducer } from "../reducers";

/**
 * @param {MainState} initialState inital state
 * @returns {Object} return redux store
 **/
export function configureStore(initialState) {
    return createStore(rootReducer, initialState);
}
