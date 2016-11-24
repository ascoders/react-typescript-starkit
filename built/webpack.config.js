"use strict";
const webpack = require("webpack");
const config = require("./config");
const webpackConfig = {
    debug: true,
    entry: [
        `webpack-dev-server/client?http://localhost:${config.localWebpackPort}`,
        'webpack/hot/only-dev-server',
        './built/client/main.js'
    ],
    output: {
        path: __dirname,
        publicPath: `http://localhost:${config.localWebpackPort}/`,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(css)/,
                loaders: ['style', 'css']
            }, {
                test: /\.(png|jpg|gif)$/,
                loaders: ['url?limit=3000&name=img/[hash:8].[name].[ext]']
            }, {
                test: /\.(woff|woff2|ttf|eot|svg)/,
                loaders: ['url?limit=3000&name=font/[hash:8].[name].[ext]']
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }, {
                test: /\.md$/,
                loader: 'text-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map',
            columns: false
        }),
    ]
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = webpackConfig;
//# sourceMappingURL=webpack.config.js.map