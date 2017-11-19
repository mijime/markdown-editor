const path = require("path");
const webpack = require("webpack");
const HtmlInlineSourcePlugin = require("html-webpack-inline-source-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const webpackConfig = require("../webpackfile");

module.exports = Object.assign({}, webpackConfig, {
    resolve: {
        alias: {
            react: "preact-compat",
            "react-dom": "preact-compat",
            "react-redux": "preact-redux",
            "milligram/src/milligram.sass": path.resolve(
                __dirname,
                "../src/styles/milligram.sass"
            )
        }
    },
    devtool: false,
    plugins: webpackConfig.plugins.concat([
        new HtmlInlineSourcePlugin(),
        new UglifyJsPlugin(),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production")
        })
    ])
});
