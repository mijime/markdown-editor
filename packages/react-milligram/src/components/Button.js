const React = require("react");
const mg = require("milligram/src/milligram.sass");
const {
    ReactCoreTypes,
    mapToCoreProps,
    ButtonDesigns
} = require("../helpers");
const BUTTOUTLINE_OUTLINE = "button-outline";
const BUTTOUTLINE_CLEAR = "button-clear";

/**
 * @param {React.Props} props is react properties
 * @returns {React.Component} react component
 **/
function Button(props) {
    const { design } = props;

    return React.createElement(
        ReactCoreTypes.BUTTOUTLINE,
        Object.assign({
            className: [
                mg.button,
                design === ButtonDesigns.OUTLINE
                    ? mg[BUTTOUTLINE_OUTLINE] : "",
                design === ButtonDesigns.CLEAR
                    ? mg[BUTTOUTLINE_CLEAR] : ""
            ].join(" ")
        }, mapToCoreProps(props)),
        props.children);
}

module.exports = Button;
