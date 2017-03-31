const path = require("path");
const webpack = require("webpack");
const HtmlInlineSourcePlugin = require("html-webpack-inline-source-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const webpackConfig = require("../webpackfile");

module.exports = Object.assign({}, webpackConfig, {
    devtool: false,
    resolve: {
        alias: Object.assign({}, webpackConfig.resolve.alias, {
            "../styles/main.sass": path.resolve(
                __dirname,
                "../src/styles/exports")
        })
    },
    plugins: webpackConfig.plugins.concat([
        new HtmlInlineSourcePlugin(),
        new UglifyJsPlugin(),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production")
        })
    ])
});
