// @flow
import React from "react";
import ReactMg from "react-milligram";
import EditIcon from "bytesize-icons/dist/icons/edit.svg";
import EyeIcon from "bytesize-icons/dist/icons/eye.svg";

/**
 * @param {any} props is react properties
 * @returns {any} react components
 **/
export function Menu(props: any) : any {
    return <ReactMg.Container>
        <ReactMg.Row>
            <ReactMg.Column>
                <ReactMg.Button
                    onClick={props.actions.toggleEditor}
                    design={ReactMg.ButtonDesigns.OUTLINE}>
                    <EditIcon />
                </ReactMg.Button>
            </ReactMg.Column>
            <ReactMg.Column>
                <ReactMg.Button
                    onClick={props.actions.togglePreview}
                    design={ReactMg.ButtonDesigns.OUTLINE}>
                    <EyeIcon />
                </ReactMg.Button>
            </ReactMg.Column>
        </ReactMg.Row>
    </ReactMg.Container>;
}
