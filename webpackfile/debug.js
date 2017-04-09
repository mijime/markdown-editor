const path = require("path");
const webpackConfig = require("../webpackfile");

module.exports = Object.assign({}, webpackConfig, {
    devServer: {
        contentBase: path.resolve(__dirname, "../build/Release"),
        port: 3000
    },
    devtool: "source-map",
    resolve: {
        alias: {
            react: "preact-compat",
            "react-dom": "preact-compat",
            "milligram/src/milligram.sass": path.resolve(
                __dirname, "../src/styles/milligram.sass")
        }
    }
});
