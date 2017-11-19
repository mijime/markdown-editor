// @flow
import React from "react";
import ReactMg from "react-milligram";
import EditIcon from "bytesize-icons/dist/icons/edit.svg";
import EyeIcon from "bytesize-icons/dist/icons/eye.svg";

/**
 * @param {Object} props is react propserties
 * @returns {React$Element<*>} react components
 **/
export function Menu(props) {
    return (
        <ReactMg.Container>
            <ReactMg.Row>
                <ReactMg.Column>
                    <ReactMg.Button
                        onClick={props.actions.toggleEditor}
                        design={ReactMg.ButtonDesigns.OUTLINE}
                    >
                        <EditIcon />
                    </ReactMg.Button>
                </ReactMg.Column>
                <ReactMg.Column>
                    <ReactMg.Button
                        onClick={props.actions.togglePreview}
                        design={ReactMg.ButtonDesigns.OUTLINE}
                    >
                        <EyeIcon />
                    </ReactMg.Button>
                </ReactMg.Column>
            </ReactMg.Row>
        </ReactMg.Container>
    );
}
