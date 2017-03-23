import React from "react";
import { connect, Provider } from "react-redux";
import ActionTypes from "../types/action";
import Editor from "../components/editor";
import Preview from "../components/preview";
import bulma from "bulma/bulma.sass";

/**
 * @param {string} code input code
 * @returns {hash} state
 **/
function mapStateToProps({ code }) {
    return { code };
}

/**
 * @param {Function} dispatch dispatcher function
 * @returns {hash} actions
 **/
function mapDispatchToProps(dispatch) {
    return {
        changeText(code) {
            return dispatch({
                type: ActionTypes.CHANGE_TEXT,
                code
            });
        }
    };
}

/**
 * @param {string} code input code
 * @param {Function} changeText action for changeText
 * @returns {React.Component} react component
 **/
function renderApp({ code, changeText }) {
    return (
      <div className={bulma.container}>
        <input type="hidden" id="code" value={code} />
        <Preview source={code} />
        <Editor value={code} onChange={changeText} />
      </div>
    );
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
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
}
