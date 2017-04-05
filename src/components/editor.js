// @flow
import React from "react";
import styles from "../styles/main.sass";

export type EditorProps = {
    id: string;
    value: string;
    onUpdateValue: Function;
}

/**
 * @param {Function} bind is bind function
 * @returns {Function} event function
 **/
function bindUpdateValue(bind) {
    return (event: SyntheticInputEvent) => bind(event.target.value);
}

/**
 * @param {EditorProps} props is react properties
 * @returns {React.Element<any>} editor component
 **/
export function Editor(props: EditorProps) : React.Element<any> {
    return <textarea id={props.id} className={styles.editor}
        onChange={bindUpdateValue(props.onUpdateValue)}>
        {props.value}
    </textarea>;
}
