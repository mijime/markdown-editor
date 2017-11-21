// @flow
import React from "react";
import ReactDOM from "react-dom";
import { Index } from "./containers";
import { configureStore } from "./store";

const store = configureStore({
    code: "",
    selection: {
        selectionStart: 0,
        selectionEnd: 0
    }
});

ReactDOM.render(<Index store={store} />, document.getElementById("app"));
