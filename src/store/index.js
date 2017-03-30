import { createStore } from "redux";
import ActionTypes from "../types/action";

/**
 * @param {hash} state store statement
 * @param {hash} action action paramater
 * @returns {hash} store statement
 **/
function rootReducer(state, action) {
    switch (action.type) {
        case ActionTypes.TOGGLE_COMPONENT:
            if (!action.toggle.editor && !action.toggle.preview) {
                return Object.assign({}, state, {
                    toggle: {
                        editor: true,
                        preview: true
                    }
                });
            }

            return Object.assign({}, state, {
                toggle: action.toggle
            });

        case ActionTypes.CHANGE_TEXT:
            return Object.assign({}, state, {
                code: action.code
            });

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
