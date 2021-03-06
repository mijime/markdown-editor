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
function Column(props) {
    const { ratio, offset } = props;

    return React.createElement(
        ReactCoreTypes.LI,
        Object.assign(
            {
                className: appendMgClassNames(props, [
                    mg.column,
                    ratio ? mg[`column-${ratio}`] : "",
                    offset ? mg[`column-offset-${offset}`] : ""
                ])
            },
            mapToCoreProps(props)
        ),
        props.children
    );
}

module.exports = Column;
