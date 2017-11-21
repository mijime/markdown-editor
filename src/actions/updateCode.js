// @flow
import ActionTypes from "../types/actions";

/**
 * @param {Function} dispatch dispatcher function
 * @returns {Object} actions
 **/
export function updateCodeHandler(dispatch) {
    return {
        updateCode(code) {
            dispatch({
                type: ActionTypes.UPDATE_CODE,
                code
            });
        },
        updateSelection(selection) {
            dispatch({
                type: ActionTypes.UPDATE_SELECTION,
                selection
            });
        }
    };
}
