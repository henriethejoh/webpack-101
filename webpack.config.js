const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const path = require("path")

module.exports = {
    mode: "production",
    plugins: [new MiniCssExtractPlugin(), new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html")

    })],
    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                    "postcss-loader"
                ],

            },
        ],
    },

    devtool: "source-map",

    devServer: {

        static: "./dist"
    }};