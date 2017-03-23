import React from "react";
import ReactMarkdown from "react-markdown";
import prism from "prismjs";
import "prismjs/themes/prism-coy.css";
import markdownStyles from "../styles/markdown.sass";

class CodeBlock extends React.Component {
    render() {
        const className = `language-${this.props.language}`;
        const grammer = prism.languages[this.props.language];

        if (!grammer) {
            return (
              <pre>
                <code className={className}>
                  {this.props.literal}
                </code>
              </pre>
            );
        }

        const html = prism.highlight(
            this.props.literal,
            grammer,
            this.props.language
        );

        return (
          <pre className={className}>
            <code className={className}
              dangerouslySetInnerHTML={{ __html: html }} />
          </pre>
        );
    }
}

CodeBlock.propTypes = {
    literal: React.PropTypes.string,
    language: React.PropTypes.string
};

/**
 * @param {string} source is markdown raw text
 * @returns {ReactMarkdown} react markdown component
 **/
export default function render({ source }) {
    return <ReactMarkdown
        className={markdownStyles["markdown-body"]}
        source={source}
        renderers={
            Object.assign(ReactMarkdown.renderers, { CodeBlock })
        } />;
}
