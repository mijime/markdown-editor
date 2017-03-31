const React = require("react");
const mg = require("milligram/src/milligram.sass");
const {
    ReactCoreTypes,
    mapToCoreProps
} = require("../helpers");

/**
 * @param {React.Props} props is react properties
 * @returns {React.Component} react component
 **/
function Row(props) {
    return React.createElement(
        ReactCoreTypes.UL,
        Object.assign({
            className: mg.row
        }, mapToCoreProps(props)),
        props.children);
}

module.exports = Row;
