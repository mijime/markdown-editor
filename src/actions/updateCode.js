// @flow
import ActionTypes from "../types/actions";
import PreviewProcessor from "../libs/processor";

/**
 * @param {Function} dispatch dispatcher function
 * @returns {any} actions
 **/
export function updateCodeHandler(dispatch: Function) {
    return {
        updateCode(code: string) {
            dispatch({
                type: ActionTypes.UPDATE_CODE,
                code
            });

            PreviewProcessor.process(code, (error, file) => {
                if (error) {
                    dispatch({
                        type: ActionTypes.CACHE_ERROR,
                        error
                    });
                    return;
                }

                dispatch({
                    type: ActionTypes.UPDATE_PREVIEW,
                    preview: file.contents
                });
            });
        }
    };
}
