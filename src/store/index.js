import { createStore } from "redux";
import rootReducer from "../reducers";

/**
 * @param {hash} initialState inital state
 * @returns {Redux.store} return redux store
 **/
export default function configureStore(initialState) {
    return createStore(rootReducer, initialState);
}
