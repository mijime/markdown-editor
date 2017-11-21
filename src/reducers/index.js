// @flow
/* ::
import type { MainState } from "../types";
*/
import ActionTypes from "../types/actions";

/**
 * @param {MainState} state store statement
 * @param {Object} action action paramater
 * @returns {Object} store statement
 **/
export function rootReducer(state, action) {
    switch (action.type) {
        case ActionTypes.UPDATE_CODE:
            return Object.assign({}, state, {
                code: action.code
            });

        case ActionTypes.UPDATE_SELECTION:
            return Object.assign({}, state, {
                selection: action.selection
            });

        default:
            return state;
    }
}
