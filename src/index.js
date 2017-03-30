import React from "react";
import ReactDOM from "react-dom";
import Index from "./containers";
import configureStore from "./store";

const prevInput = document.querySelector("#code");

const code = prevInput ? prevInput.value : "";
const store = configureStore({
    code,
    toggle: {
        editor: code.length === 0,
        preview: true
    }
});

ReactDOM.render(
    <Index store={store} />,
    document.getElementById("app")
);
