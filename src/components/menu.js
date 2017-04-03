import React from "react";
import ReactMg from "react-milligram";
import Pencil from "react-themify-icons/src/components/Pencil"
import Eye from "react-themify-icons/src/components/Eye"
import styles from "../styles/main.sass";

/**
 * @param {React.Props} props is react properties
 * @returns {React.Component} react components
 **/
export default function Menu() {
    return <ReactMg.Container>
        <ReactMg.Row>
            <ReactMg.Column>
                <ReactMg.Button design={ReactMg.ButtonDesigns.OUTLINE}>
                        <Pencil className={styles.icon} />
                </ReactMg.Button>
            </ReactMg.Column>
            <ReactMg.Column>
                <ReactMg.Button>
                        <Eye className={styles.icon} />
                </ReactMg.Button>
            </ReactMg.Column>
        </ReactMg.Row>
    </ReactMg.Container>;
}
