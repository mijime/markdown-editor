import React from "react";
import ReactTestRenderer from "react-test-renderer";
import { Index } from "../containers";
import { configureStore } from "../store";

it("index", () => {
    const code = `
# Hello world

\`\`\`js
var s = function () {}
\`\`\`
`;
    const store = configureStore({
        code,
        toggle: {
            editor: true,
            preview: true
        }
    });

    ReactTestRenderer.create(<Index store={store} />);
});

it("not registerd highlight code", () => {
    const code = `
\`\`\`helloworld
Hello world
\`\`\`

\`\`\`
non set grammer
\`\`\`

\`sentence\`
`;
    const store = configureStore({
        code,
        toggle: {
            editor: true,
            preview: true
        }
    });

    ReactTestRenderer.create(<Index store={store} />);
});
