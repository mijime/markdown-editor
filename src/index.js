import document from "document";
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { connect, Provider } from "react-redux";
import Editor from "./editor";
import Preview from "./preview";

const store = createStore((state = {}, action) => {
    switch (action.type) {
        case "CHANGE_TEXT":
            return {
                code: action.code
            };
        default:
            return state;
    }
}, {
    code: ""
});

const App = connect(state => state, dispatch => ({
    changeText(code) {
        return dispatch({
            type: "CHANGE_TEXT",
            code
        });
    }
}))(
  ({ code, changeText }) => (
    <div>
      <Editor value={code} onChange={changeText} />
      <Preview source={code} />
    </div>
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
