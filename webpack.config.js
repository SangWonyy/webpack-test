const path = require('path');
const webpack = require("webpack");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['css-loader']
            },
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                useBuiltIns: 'usage',
                                corejs: 3
                            }]
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin({
            handler: (percentage, message) => {
                console.info(percentage, message)
            }
        }),
        new BundleAnalyzerPlugin()
    ]
}
