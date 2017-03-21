import React from "react";
import ReactMarkdown from "react-markdown";
import hljs from "highlight.js/lib/highlight";
import "highlight.js/styles/monokai.css";
import "github-markdown-css/github-markdown.css";

class CodeBlock extends React.Component {
    highlightCode() {
        hljs.highlightBlock(this.refs.code);
    }

    componentDidMount() {
        this.highlightCode();
    }

    componentDidUpdate() {
        this.highlightCode();
    }

    render() {
        return (
            <pre>
                <code ref="code" className={this.props.language}>
                  {this.props.literal}
                </code>
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
    return <ReactMarkdown source={source} renderers={
      Object.assign(ReactMarkdown.renderers, { CodeBlock })
    } />;
}
