const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");

module.exports = {
    entry: {
        main: path.resolve(__dirname, "src")
    },
    output: {
        path: path.resolve(__dirname, "build/Release"),
        filename: "[name].js"
    },
    devtool: "source-map",
    devServer: {
        contentBase: path.resolve(__dirname, "build/Release"),
        port: 3000
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }, {
            test: /\.js$/,
            use: ["babel-loader", "eslint-loader"],
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: [".js", ".css"],
        alias: {
            react: "preact-compat",
            "react-dom": "preact-compat"
        }
    },
    externals: {
        document: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/assets/index.html"),
            inlineSource: ".(js|css)$"
        }),
        new HtmlWebpackInlineSourcePlugin()
    ]
};
