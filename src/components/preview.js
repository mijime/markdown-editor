// @flow
/* ::
type PreviewProps = {
    value: string;
}
*/
/**
 * @typedef {Object} PreviewProps
 * @property {string} value
 **/

import React from "react";
import PreviewProcessor from "../libs/processor";
import styles from "../styles/main.sass";

let currentSelection = null;

/** *
 * @param {Node} node is node
 * @returns {void}
 **/
function walk(node) {
    if (!node || !node.position) {
        return;
    }

    const { start, end } = node.position;

    if (
        node.type === "element" &&
        start.offset < currentSelection.selectionStart &&
        end.offset > currentSelection.selectionEnd
    ) {
        node.properties.className = styles.cursor;
        return;
    }

    if (!node.children) {
        return;
    }

    node.children.map(walk);
}

const customProcessor = PreviewProcessor.use(() => node => {
    if (!currentSelection) {
        return;
    }

    walk(node);
});

/**
 * @class
 **/
export class Preview extends React.Component {

    /* flow-include
    state: {
        preview: React.Element<any>;
    };
    */

    /**
     * @param {PreviewProps} props props
     * @returns {void} constructor
     **/
    constructor(props) {
        super(props);
        this.state = {
            preview: <div />
        };
    }

    /**
     * @param {PreviewProps} props props
     * @returns {void} async
     **/
    componentWillReceiveProps(props) {
        const { value, selection } = props;

        currentSelection = selection;

        customProcessor.process(value, (error, file) => {
            if (error !== null) {
                return;
            }

            this.setState({
                preview: file.contents
            });
        });
    }

    render() {
        const { preview } = this.state;

        return preview;
    }
}
