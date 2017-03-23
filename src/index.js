import React from "react";
import ReactDOM from "react-dom";
import Index from "./containers";
import configureStore from "./store";

const prevInput = document.querySelector("#code");

const store = configureStore({
    code: prevInput ? prevInput.value : ""
});

ReactDOM.render(
    <Index store={store} />,
    document.getElementById("app")
);
