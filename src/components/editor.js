import React from "react";
import styles from "../styles/main.sass";

/**
 * @param {string} value react properties
 * @param {event} onChange react properties
 * @returns {React.Component} editor
 **/
export default function render({ id, value, onChange }) {
    return <textarea
        id={id}
        className={styles.editor}
        onChange={onChange}>{value}</textarea>;
}
