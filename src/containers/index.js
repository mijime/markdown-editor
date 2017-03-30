import React from "react";
import { connect, Provider } from "react-redux";
import ActionTypes from "../types/action";
import Editor from "../components/editor";
import Preview from "../components/preview";
import styles from "../styles/style.sass";
import mg from "milligram/src/milligram.sass";

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
 * @param {hash} toggle react parameters
 * @param {hash} actions react parameters
 * @returns {React.Component} react component
 **/
function renderApp({ code, toggle, actions }) {
    const content = <div className={[mg.row, styles.heighter].join(" ")}>
        { toggle.editor ? <div className={[mg.column, styles.heighter].join(" ")}>
            <Editor value={code} onChange={actions.changeText} />
        </div> : null }
        { toggle.preview ? <div className={[mg.column, styles.heighter].join(" ")}>
            <Preview source={code} />
        </div> : null }
    </div>;

    const menu = <ul className={mg.row}>
        <li className={mg.column}>
            <button className={[
                mg.button,
                toggle.editor
                    ? "" : mg["button-outline"]
            ].join(" ")} onClick={
                actions.toggleEditor(toggle)
            }> Edit </button>
        </li>
        <li className={mg.column}>
            <button className={[
                mg.button,
                toggle.preview
                    ? "" : mg["button-outline"]
            ].join(" ")} onClick={
                actions.togglePreview(toggle)
            }> Show </button>
        </li>
    </ul>;

    return <div className={styles.app}>
        <div className={[mg.container, styles.heighter].join(" ")}>
            {content}
        </div>
        <div className={styles.navigation}>
            <nav className={mg.container}>
                {menu}
            </nav>
        </div>
        <input type="hidden" id="code" value={code} />
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
