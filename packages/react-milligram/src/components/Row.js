const React = require("react");
const mg = require("milligram/src/milligram.sass");
const {
    ReactCoreTypes,
    mapToCoreProps,
    appendMgClassNames
} = require("../helpers");

/**
 * @param {React.Props} props is react properties
 * @returns {React.Component} react component
 **/
function Row(props) {
    return React.createElement(
        ReactCoreTypes.UL,
        Object.assign({
            className: appendMgClassNames(
                props, [mg.row]
            )
        }, mapToCoreProps(props)),
        props.children);
}

module.exports = Row;
