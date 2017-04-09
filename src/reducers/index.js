// @flow
import ActionTypes from "../types/actions";

/**
 * @param {Object} state store statement
 * @param {Object} action action paramater
 * @returns {Object} store statement
 **/
export function rootReducer(state, action) {
    switch (action.type) {
        case ActionTypes.UPDATE_CODE:
            return Object.assign({}, state, {
                code: action.code
            });

        default:
            return state;
    }
}
