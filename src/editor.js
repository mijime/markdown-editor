import React from "react";
import ReactCodeMirror from "react-codemirror";
import "codemirror/mode/markdown/markdown";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/monokai.css";

/**
 * @param {Object} props react properties
 * @returns {ReactCodeMidrror}  code mirror editor
 **/
export default function render(props) {
    const style = {
        linenumber: true,
        mode: "markdown",
        theme: "monokai"
    };

    return <ReactCodeMirror {...props} options={style} />;
}
