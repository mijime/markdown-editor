const path = require("path");
const webpack = require("webpack");
const HtmlPlugin = require("html-webpack-plugin");
const HtmlInlineSourcePlugin = require("html-webpack-inline-source-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        main: path.resolve(__dirname, "src"),
        vendor: ["react-markdown", "react-codemirror"]
    },
    output: {
        path: path.resolve(__dirname, "build/Release"),
        filename: "[name].js"
    },
    devServer: {
        contentBase: path.resolve(__dirname, "build/Release"),
        port: 3000
    },
    devtool: "source-map",
    module: {
        rules: [{
            test: /\.sass$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader?modules", "sass-loader"]
            })
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader"]
            })
        }, {
            test: /\.js$/,
            use: ["babel-loader", "eslint-loader"],
            exclude: /node_modules/
        }]
    },
    resolve: {
        alias: {
            react: "preact-compat",
            "react-dom": "preact-compat"
        }
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new webpack.optimize.CommonsChunkPlugin({
            name: ["main", "vendor"]
        }),
        new HtmlPlugin({
            template: path.resolve(__dirname, "src/assets/index.html"),
            inlineSource: ".(js|css)$"
        }),
        new HtmlInlineSourcePlugin()
    ]
};
