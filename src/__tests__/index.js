import React from "react";
import ReactTestRenderer from "react-test-renderer";
import Index from "../containers";
import configureStore from "../store";



it("index", () => {
    const code = "";
    const store = configureStore({
        code,
        toggle: {
            editor: true,
            preview: true
        }
    });
    ReactTestRenderer.create(<Index store={store} />);
});
