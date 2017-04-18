// @flow
/* ::
import type { MainState } from "../types";
declare type NavigatorProps = {
    children?: Array<React$Element<*>[]>
}
*/
/**
 * @typedef {Object} NavigatorProps
 * @property {React$Element<*>[]} children is children
 **/

import React from "react";
import { connect, Provider } from "react-redux";
import ReactMg from "react-milligram";
import { Editor } from "../components/editor";
import { Menu } from "../components/menu";
import { Preview } from "../components/preview";
import { updateCodeHandler } from "../actions/updateCode";
import styles from "../styles/main.sass";

/**
 * @param {string} code is input code
 * @returns {MainState} redux state
 **/
function mapStateToProps({ code }) {
    return { code };
}

/**
 * @param {Function} dispatch dispatcher function
 * @returns {Object} actions
 **/
function mapDispatchToProps(dispatch) {
    const actions = updateCodeHandler(dispatch);

    return { actions };
}

/**
 * @param {string} code is input code
 * @param {Object} actions react parameters
 * @returns {React$Element<*>} react components
 **/
function MainPanel({ code, actions }) {
    return <ReactMg.Container>
        <ReactMg.Row>
            <ReactMg.Column className={[
                styles.screen,
                styles.hidePrint
            ].join(" ")}>
                <Editor id={"code"}
                    value={code}
                    onUpdateValue={actions.updateCode} />
            </ReactMg.Column>
            <ReactMg.Column className={styles.screen}>
                <Preview value={code} />
            </ReactMg.Column>
        </ReactMg.Row>
    </ReactMg.Container>;
}

/**
 * @param {NavigatorProps} props is react parameters
 * @returns {React$Element<*>} react components
 **/
function Navigator(props) {
    const { children } = props;

    return <nav className={[
        styles.hidePrint,
        styles.navigation
    ].join(" ")}>
        {children}
    </nav>;
}

/**
 * @param {Object} props is react parameters
 * @returns {React$Element<*>} react components
 **/
function renderApp(props) {
    return <div className={styles.app}>
        <MainPanel {...props} />
        <Navigator>
            <Menu {...props} />
        </Navigator>
    </div>;
}

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(renderApp);

/**
 * @param {Object} props store parameter
 * @returns {React$Element<*>} return react component
 **/
export function Index(props) {
    return <Provider store={props.store}>
        <App />
    </Provider>;
}
