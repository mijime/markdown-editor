// @flow
import ActionTypes from "../types/actions";

/**
 * @param {any} state store statement
 * @param {any} action action paramater
 * @returns {any} store statement
 **/
export function rootReducer(state/* :any*/, action/* :any*/) {
    switch (action.type) {
        case ActionTypes.UPDATE_PREVIEW:
            return Object.assign({}, state, {
                preview: action.preview
            });

        case ActionTypes.UPDATE_CODE:
            return Object.assign({}, state, {
                code: action.code
            });

        default:
            return state;
    }
}
