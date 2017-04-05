// @flow
import React from "react";
import { connect, Provider } from "react-redux";
import ReactMg from "react-milligram";
import { Editor } from "../components/editor";
import { Menu } from "../components/menu";
import { updateCodeHandler } from "../actions/updateCode";
import styles from "../styles/main.sass";

/**
 * @param {string} code is input code
 * @param {any} preview is markdown preview
 * @returns {any} redux state
 **/
function mapStateToProps({ code, preview }) {
    return { code, preview };
}

/**
 * @param {Function} dispatch dispatcher function
 * @returns {any} actions
 **/
function mapDispatchToProps(dispatch: Function) {
    const actions = updateCodeHandler(dispatch);

    return { actions };
}

/**
 * @param {string} code is input code
 * @param {React.Element<any>} preview is markdown preview
 * @param {any} actions react parameters
 * @returns {React.Element<any>} react components
 **/
function MainPanel({ code, preview, actions }) {
    return <ReactMg.Container>
        <ReactMg.Row>
            <ReactMg.Column className={styles.screen}>
                <Editor id={"code"}
                    value={code}
                    onUpdateValue={actions.updateCode} />
            </ReactMg.Column>
            <ReactMg.Column className={styles.screen}>
                {preview}
            </ReactMg.Column>
        </ReactMg.Row>
    </ReactMg.Container>;
}

/**
 * @param {any} children is react parameters
 * @returns {React.Element<any>} react components
 **/
function Navigator({ children }) {
    return <nav className={styles.navigation}>
        {children}
    </nav>;
}

/**
 * @param {any} props is react parameters
 * @returns {React.Element<any>} react components
 **/
function renderApp(props: any) {
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
 * @param {any} props store parameter
 * @returns {React.Element<any>} return react component
 **/
export function Index(props: any) {
    return <Provider store={props.store}>
        <App />
    </Provider>;
}
