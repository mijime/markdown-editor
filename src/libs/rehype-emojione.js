// @flow
import emoji from "node-emoji";
import styles from "../styles/main.sass";

const URL_EMOJIONE_SVG = "//cdn.jsdelivr.net/emojione/assets/svg";
const REGEXP_EMOJI = /:-1:|:+1:|:[\w-]+:/;
const NodeTypes = {
    TEXT: "text",
    ELEMENT: "element"
};
const NodeTagNames = {
    SPAN: "span",
    IMAGE: "img"
};

/**
 * @param {string} text text
 * @returns {string} remove colon text
 **/
function removeColon(text) {
    return text.replace(/:/g, "");
}

/**
 * @param {string} text not parsed text
 * @param {Array<Object>} nodes hast children
 * @returns {Array<Object>} hast children
 **/
function sliceToEmoji(text, nodes = []) {
    if (!text || text.length <= 0) {
        return nodes;
    }

    const sliced = REGEXP_EMOJI.exec(text);

    if (!sliced) {
        nodes.push({
            type: NodeTypes.TEXT,
            value: text
        });
        return nodes;
    }

    if (sliced.index > 0) {
        nodes.push({
            type: NodeTypes.TEXT,
            value: text.substr(0, sliced.index)
        });
    }

    const shortname = removeColon(sliced[0]);
    const ascii = emoji.get(shortname);

    if (ascii && ascii !== sliced[0]) {
        const unicode = ascii.codePointAt().toString(0x10);

        nodes.push({
            tagName: NodeTagNames.IMAGE,
            type: NodeTypes.ELEMENT,
            properties: {
                class: styles.emojione,
                alt: ascii,
                title: shortname,
                src: `${URL_EMOJIONE_SVG}/${unicode}.svg`
            }
        });
    } else {
        nodes.push({
            type: NodeTypes.TEXT,
            value: sliced[0]
        });
    }

    const nextText = text.substr(
    sliced.index + sliced[0].length,
    text.length);

    return sliceToEmoji(nextText, nodes);
}

/**
 * @returns {Function} transform function
 **/
export default function plugin() {

    /**
     * @param {Object} node hast node
     * @returns {void} not return
     **/
    function transformer(node) {
        if (node.type !== NodeTypes.TEXT) {
            if (!node.children) {
                return;
            }

            node.children.map(transformer);
            return;
        }

        node.children = sliceToEmoji(node.value);
        node.tagName = NodeTagNames.SPAN;
        node.type = NodeTypes.ELEMENT;
        delete node.value;
    }

    return transformer;
}
