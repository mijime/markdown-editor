const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCssPlugin = new ExtractTextPlugin("extract-[name].css");

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
            use: extractCssPlugin.extract({
                fallback: "style-loader",
                use: [
                    "css-loader?modules",
                    "sass-loader"
                ]
            })
        }, {
            test: /\.css$/,
            use: extractCssPlugin.extract({
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
        extractCssPlugin,
        new HtmlPlugin({
            template: path.resolve(__dirname, "src/assets/index.html"),
            inlineSource: ".(js|css)$"
        })
    ]
};
