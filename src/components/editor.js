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
    return function onUpdateValue(event) {
        bind(event.target.value);
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
            onChange={bindUpdateValue(props.onUpdateValue)}
        >
            {props.value}
        </textarea>
    );
}
