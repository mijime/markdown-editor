import React from "react";
import ReactMg from "react-milligram";

/**
 * @param {React.Props} props is react properties
 * @returns {React.Component} react components
 **/
export default function Menu() {
    return <ReactMg.Container>
        <ReactMg.Row>
            <ReactMg.Column>
                <ReactMg.Button
                    float="right"
                    clearfix={true}> Show </ReactMg.Button>
                <ReactMg.Button
                    float="right"
                    design={ReactMg.ButtonDesigns.OUTLINE}>
                        Edit
                </ReactMg.Button>
            </ReactMg.Column>
        </ReactMg.Row>
    </ReactMg.Container>;
}
