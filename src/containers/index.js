import React from "react";
import { connect, Provider } from "react-redux";
import ReactMg from "react-milligram";
import Editor from "../components/editor";
import Menu from "../components/menu";
import updateCodeHandler from "../actions/updateCode";
import styles from "../styles/main.sass";

/**
 * @param {string} code is input code
 * @param {React.Element} preview is markdown preview
 * @returns {Redux.State} redux state
 **/
function mapStateToProps({ code, preview }) {
    return { code, preview };
}

/**
 * @param {Function} dispatch dispatcher function
 * @returns {hash} actions
 **/
function mapDispatchToProps(dispatch) {
    const actions = updateCodeHandler(dispatch);

    return { actions };
}

/**
 * @param {string} code is input code
 * @param {React.Element} preview is markdown preview
 * @param {hash} actions react parameters
 * @returns {React.Component} react components
 **/
function MainPanel({ code, preview, actions }) {
    return <ReactMg.Container>
        <ReactMg.Row>
            <ReactMg.Column>
                <Editor id={"code"}
                    value={code}
                    onChange={actions.updateCode} />
            </ReactMg.Column>
            <ReactMg.Column>
                {preview}
            </ReactMg.Column>
        </ReactMg.Row>
    </ReactMg.Container>;
}

/**
 * @param {React.Element} children is react parameters
 * @returns {React.Component} react components
 **/
function Navigator({ children }) {
    return <nav className={styles.navigation}>
        {children}
    </nav>;
}

/**
 * @param {React.Props} props is react parameters
 * @returns {React.Component} react components
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
 * @param {Redux.store} store store parameter
 * @returns {React.Component} return react component
 **/
export default function render({ store }) {
    return <Provider store={store}>
        <App />
    </Provider>;
}
