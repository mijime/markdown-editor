const React = require("react");
const mg = require("milligram/src/milligram.sass");
const {
    ReactCoreTypes,
    mapToCoreProps,
    appendMgClassNames,
    ButtonDesigns
} = require("../helpers");
const BUTTON_OUTLINE = "button-outline";
const BUTTON_CLEAR = "button-clear";

/**
 * @param {Object} props is react properties
 * @returns {React$Element<*>} react component
 **/
function Button(props) {
    const { design } = props;

    return React.createElement(
        ReactCoreTypes.BUTTON,
        Object.assign(
            {
                className: appendMgClassNames(props, [
                    mg.button,
                    design === ButtonDesigns.OUTLINE ? mg[BUTTON_OUTLINE] : "",
                    design === ButtonDesigns.CLEAR ? mg[BUTTON_CLEAR] : ""
                ])
            },
            mapToCoreProps(props)
        ),
        props.children
    );
}

module.exports = Button;
