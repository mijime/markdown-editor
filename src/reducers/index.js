import ActionTypes from "../types/actions";

/**
 * @param {Redux.State} state store statement
 * @param {hash} action action paramater
 * @returns {Redux.State} store statement
 **/
export default function rootReducer(state, action) {
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
