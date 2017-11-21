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

const customProcessor = PreviewProcessor.use(() => {

    /** *
     * @param {Node} node is node
     * @returns {void}
     **/
    function transfer(node) {
        if (!currentSelection) {
            return node;
        }

        if (!node || !node.position) {
            return node;
        }

        const { start, end } = node.position;

        if (
            node.type === "element" &&
            start.offset < currentSelection.selectionStart &&
            end.offset > currentSelection.selectionEnd &&
            node.children.every(child => child.type !== "element")
        ) {
            if (node.properties) {
                node.properties.className = styles.cursor;
            } else {
                node.properties = { className: styles.cursor };
            }
            return node;
        }

        if (!node.children) {
            return node;
        }

        node.children.map(transfer);
        return node;
    }
    return transfer;
}).use(() => {

    /**
     * @param {Node} node is node
     * @returns {boolean} is empty
     **/
    function isList(node) {
        return node.type === "element" && node.tagName === "li";
    }

    /**
     * @param {Node} node is node
     * @returns {boolean} is empty
     **/
    function hasAnyChildren(node) {
        if (!node.children || node.children.length === 0) {
            return true;
        }

        if (node.tagName !== "span") {
            return true;
        }

        return !node.children.every(
            child => child.type === "text" && child.value === "\n"
        );
    }

    /**
     * @param {Node} node is node
     * @returns {Node} is empty
     **/
    function transfer(node) {
        if (!node.children || node.children.length === 0) {
            return node;
        }

        if (node.tagName === "ul") {
            node.children = node.children
                .filter(hasAnyChildren)
                .filter(isList)
                .map(transfer);
            return node;
        }

        node.children = node.children.filter(hasAnyChildren).map(transfer);
        return node;
    }

    return transfer;
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
