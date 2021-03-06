// @flow

import React from "react";
import remark from "remark";
import emojione4rehype from "./rehype-emojione";
import remark2rehype from "remark-rehype";
import rehype2react from "rehype-react";
import prism4rehype from "rehype-prism";
import "prismjs/components/prism-java";
import "prismjs/components/prism-json";
import "prismjs/components/prism-go";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-yaml";
import "prismjs/components/prism-sql";
import "prismjs/themes/prism.css";

const Processor = remark()
    .use(remark2rehype)
    .use(prism4rehype)
    .use(emojione4rehype)
    .use(rehype2react, {
        createElement: React.createElement
    });

export default Processor;
