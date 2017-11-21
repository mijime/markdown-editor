// @flow
/* ::
declare type EditorProps = {
    id: string;
    value: string;
    onUpdateValue: Function;
}
*/
/**
 * @typedef {Object} EditorProps
 * @property {string} id is id
 * @property {string} value is value
 * @property {Function} onUpdateValue is onUpdateValue
 **/

import React from "react";
import styles from "../styles/main.sass";

/**
 * @param {Function} bind is bind function
 * @returns {Function} event function
 **/
function bindUpdateValue(bind) {
    if (!bind) {
        return null;
    }

    return function onEvent(event) {
        bind(event.target.value);
    };
}

/**
 * @param {Function} bind is bind function
 * @returns {Function} event function
 **/
function bindSelection(bind) {
    if (!bind) {
        return null;
    }

    return function onEvent(event) {
        const { selectionStart, selectionEnd } = event.target;

        bind({ selectionStart, selectionEnd });
    };
}

/**
 * @param {EditorProps} props is react propserties
 * @returns {React$Element<*>} editor component
 **/
export function Editor(props) {
    return (
        <textarea
            id={props.id}
            ref={props.inputRef}
            className={styles.editor}
            onKeydown={bindSelection(props.onSelection)}
            onChange={bindUpdateValue(props.onUpdateValue)}
        >
            {props.value}
        </textarea>
    );
}
