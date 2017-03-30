import React from "react";
import marked from "marked";
import prism from "prismjs";
import "prismjs/components/prism-java";
import "prismjs/components/prism-json";
import "prismjs/components/prism-go";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-yaml";
import "prismjs/components/prism-sql";
import "prismjs/themes/prism.css";

class CodeRenderer extends marked.Renderer {
    code(literal, language) {
        const grammer = prism.languages[language];

        if (grammer) {
            const className = `language-${language}`;

            return `<pre className=${className}><code className=${className}>${
                prism.highlight(
                  literal,
                  grammer,
                  language
                )
            }</code></pre>`;
        }

        return super.code(literal, language);
    }
}

const renderer = new CodeRenderer();

/**
 * @param {string} source is markdown raw text
 * @returns {ReactMarkdown} react markdown component
 **/
export default function render({ className, source }) {
    return <div className={className}
        dangerouslySetInnerHTML={{
            __html: marked(source, { renderer })
        }} />;
}
