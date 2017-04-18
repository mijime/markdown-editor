// @flow
import emojione from "emojione";

const NodeTypes = {
    TEXT: "text",
    ELEMENT: "element"
};

const NodeTagNames = {
    PARAGRAPH: "p",
    SPAN: "span",
    IMAGE: "img"
};

function sliceToEmoji(nodes, text) {
    const sliced = emojione.regShortNames.exec(text);

    console.log(text, sliced);

    if (!sliced) {
        nodes.push({
            type: NodeTypes.TEXT,
            value: text
        });
        return nodes;
    }

    const shortname = sliced[0];
    const unicode = emojione.emojioneList[shortname]
    .unicode[emojione.emojioneList[shortname]
      .unicode.length - 1];

    if (sliced.index > 0) {
        nodes.push({
            type: NodeTypes.TEXT,
            value: text.substr(0, sliced.index)
        });
    }

    nodes.push({
        tagName: NodeTagNames.IMAGE,
        type: NodeTypes.ELEMENT,
        properties: {
            class: "emojione",
            alt: emojione.unicodeAlt ? emojione.convert(unicode.toUpperCase()) : shortname,
            title: shortname,
            src: `${emojione.imagePathPNG}${unicode}.png${emojione.cacheBustParam}`
        }
    });

    const nextText = text.substr(
    sliced.index + shortname.length,
    text.length);

    return sliceToEmoji(nodes, nextText);
}

export default function plugin(settings) {
    function transformer(node) {
        if (node.type !== NodeTypes.TEXT) {
            if (!node.children) {
                return;
            }

            node.children.map(transformer);
            return;
        }

        node.children = sliceToEmoji([], node.value);
        node.tagName = NodeTagNames.SPAN;
        node.type = NodeTypes.ELEMENT;
        delete node.value;
        console.log(node);
    }

    return transformer;
}
