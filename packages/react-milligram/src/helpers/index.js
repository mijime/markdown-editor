const mg = require("milligram/src/milligram.sass");

const ReactCoreTypes = {
    DIV: "div",
    UL: "ul",
    LI: "li",
    BUTTON: "button"
};
const ButtonDesigns = {
    OUTLINE: "outline",
    CLEAR: "clear"
};

/**
 * @param {Object} props is react properties
 * @param {string[]} baseClassNames is class name list
 * @returns {string} core react properties
 **/
function appendMgClassNames(props, baseClassNames = []) {
    Object.keys(props)
        .forEach(name => {
            switch (name) {
                case "className":
                    baseClassNames.push(props[name]);
                    break;

                case "float":
                    baseClassNames.push(mg[`${name}-${props[name]}`]);
                    break;

                case "clearfix":
                    if (props[name]) {
                        baseClassNames.push(mg[name]);
                    }
                    break;

                default:
                    break;
            }
        });

    return baseClassNames.filter(s => s).join(" ");
}


/**
 * @param {Object} props is react properties
 * @returns {Object} core react properties
 **/
function mapToCoreProps(props) {
    const nextProps = {};

    Object.keys(props)
        .forEach(name => {
            switch (name) {
                case "key":
                case "ref":
                case "id":
                case "width":
                case "height":
                case "style":
                case "onClick":
                case "onChange":
                    nextProps[name] = props[name];
                    break;

                default:
                    break;
            }
        });

    return nextProps;
}

module.exports = {
    ReactCoreTypes,
    mapToCoreProps,
    appendMgClassNames,
    ButtonDesigns
};
