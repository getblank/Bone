const path = require("path");
const webpack = require("webpack");

module.exports = () => ({
    mode: "production",
    entry: [
        "whatwg-fetch",
        "./src/index.js",
    ],
    // devtool: options.dev ? "cheap-module-eval-source-map" : "hidden-source-map",
    output: {
        path: path.resolve("./dist"),
        filename: "Blank.js",
        libraryTarget: "var",
        // name of the global var: "Foo"
        library: "Blank",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
        ],
    },
});