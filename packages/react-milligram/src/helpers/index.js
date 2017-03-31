const ReactCoreTypes = {
    DIV: "div",
    UL: "ul",
    LI: "li",
    BUTTOUTLINE: "button"
};
const ReactCoreProps = [
    "ref",
    "id",
    "width",
    "height",
    "style",
    "className",
    "onClick",
    "onChange"
];
const ButtonDesigns = {
    OUTLINE: "outline",
    CLEAR: "clear"
};

/**
 * @param {React.Props} props is react properties
 * @returns {React.Props} core react properties
 **/
function mapToCoreProps(props) {
    const nextProps = {};

    Object.keys(props)
        .forEach(name => {
            if (ReactCoreProps.includes(name)) {
                nextProps[name] = props[name];
            }
        });

    return nextProps;
}

module.exports = {
    ReactCoreTypes,
    mapToCoreProps,
    ButtonDesigns
};
