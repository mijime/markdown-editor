// @flow
import emoji from "node-emoji";
import styles from "../styles/main.sass";

const NodeTypes = {
    TEXT: "text",
    ELEMENT: "element"
};

const NodeTagNames = {
    SPAN: "span",
    IMAGE: "img"
};

const RegexpEmoji = /:-1:|:+1:|:[\w-]+:/;

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

    const sliced = RegexpEmoji.exec(text);

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
    const unicode = emoji.get(shortname);

    if (unicode && unicode !== sliced[0]) {
        const ascii = unicode.codePointAt().toString(0x10);

        nodes.push({
            tagName: NodeTagNames.IMAGE,
            type: NodeTypes.ELEMENT,
            properties: {
                class: styles.emojione,
                alt: unicode,
                title: shortname,
                src: `//cdn.jsdelivr.net/emojione/assets/svg/${ascii}.svg`
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
