const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        main: path.resolve(__dirname, "src")
    },
    output: {
        path: path.resolve(__dirname, "build/Release"),
        filename: "[name].js"
    },
    module: {
        rules: [{
            test: /\.sass$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [
                    "css-loader?modules",
                    "sass-loader"
                ]
            })
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader"]
            })
        }, {
            test: /\.js$/,
            use: ["babel-loader"],
            exclude: /node_modules/
        }, {
            test: /\.svg$/,
            use: [
                "babel-loader",
                "svg-react-loader"
            ]
        }]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new HtmlPlugin({
            template: path.resolve(__dirname, "src/assets/index.html"),
            inlineSource: ".(js|css)$"
        })
    ]
};
