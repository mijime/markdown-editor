// @flow
/* ::
type PreviewProps = {
    value: string;
}
*/
/**
 * @typedef {Object} PreviewProps
 * @property {string} value
 **/

import React from "react";
import PreviewProcessor from "../libs/processor";

/**
 * @class
 **/
export class Preview extends React.Component {

    /* flow-include
    state: {
        preview: React.Element<any>;
    };
    */

    /**
     * @param {PreviewProps} props props
     * @returns {void} constructor
     **/
    constructor(props) {
        super(props);
        this.state = {
            preview: <div />
        };
    }

    /**
     * @param {PreviewProps} props props
     * @returns {void} async
     **/
    componentWillReceiveProps(props) {
        const { value } = props;

        PreviewProcessor.process(value, (error, file) => {
            if (error !== null) {
                return;
            }

            this.setState({
                preview: file.contents
            });
        });
    }

    render() {
        const { preview } = this.state;

        return preview;
    }
}
