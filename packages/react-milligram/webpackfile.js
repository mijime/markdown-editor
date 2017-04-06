module.exports = {
    module: {
        loaders: [{
            exclude: /node_modules/,
            use: ["babel-loader"],
            test: /\.jsx?$/
        }, {
            use: [
                "style-loader",
                "css-loader?modules",
                "sass-loader"
            ],
            test: /\.sass$/
        }]
    }
};
