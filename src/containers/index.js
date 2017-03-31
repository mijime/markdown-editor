import React from "react";
import { connect, Provider } from "react-redux";
import ReactMg from "react-milligram";
import ActionTypes from "../types/action";
import Editor from "../components/editor";
import Preview from "../components/preview";
import styles from "../styles/main.sass";

/**
 * @param {string} code input code
 * @returns {hash} state
 **/
function mapStateToProps({ code, toggle }) {
    return { code, toggle };
}

/**
 * @param {Function} dispatch dispatcher function
 * @returns {hash} actions
 **/
function mapDispatchToProps(dispatch) {
    return { actions: {
        toggleEditor(toggle) {
            return function() {
                return dispatch({
                    type: ActionTypes.TOGGLE_COMPONENT,
                    toggle: {
                        editor: !toggle.editor,
                        preview: toggle.preview
                    }
                });
            };
        },
        togglePreview(toggle) {
            return function() {
                return dispatch({
                    type: ActionTypes.TOGGLE_COMPONENT,
                    toggle: {
                        editor: toggle.editor,
                        preview: !toggle.preview
                    }
                });
            };
        },
        changeText({ target }) {
            return dispatch({
                type: ActionTypes.CHANGE_TEXT,
                code: target.value
            });
        }
    } };
}

/**
 * @param {string} code react parameters
 * @param {hash} actions react parameters
 * @returns {React.Component} react component
 **/
function renderApp({ code, actions }) {
    const content = <ReactMg.Container>
        <ReactMg.Row>
            <ReactMg.Column>
                <Editor id={"code"} value={code} onChange={actions.changeText} />
            </ReactMg.Column>
            <ReactMg.Column>
                <Preview source={code} />
            </ReactMg.Column>
         </ReactMg.Row>
    </ReactMg.Container>;

    const menu = <ReactMg.Container>
        <ReactMg.Row>
            <ReactMg.Column>
                <ReactMg.Button design={ReactMg.ButtonDesigns.CLEAR}> Edit </ReactMg.Button>
            </ReactMg.Column>
            <ReactMg.Column>
                <ReactMg.Button> Show </ReactMg.Button>
            </ReactMg.Column>
         </ReactMg.Row>
    </ReactMg.Container>;

    return <div className={styles.app}>
        {content}
        <div className={styles.navigation}>
            {menu}
        </div>
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
