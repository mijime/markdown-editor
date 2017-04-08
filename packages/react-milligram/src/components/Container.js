const React = require("react");
const mg = require("milligram/src/milligram.sass");
const {
    ReactCoreTypes,
    mapToCoreProps,
    appendMgClassNames
} = require("../helpers");

/**
 * @param {Object} props is react properties
 * @returns {React$Element<*>} react component
 **/
function Container(props) {
    return React.createElement(
        ReactCoreTypes.DIV,
        Object.assign({
            className: appendMgClassNames(
                props, [mg.container]
            )
        }, mapToCoreProps(props)),
        props.children);
}

module.exports = Container;
