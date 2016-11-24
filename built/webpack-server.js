"use strict";
const webpackDevServer = require("webpack-dev-server");
const webpack = require("webpack");
const webpack_config_1 = require("./webpack.config");
const config = require("./config");
var server = new webpackDevServer(webpack(webpack_config_1.default), {
    publicPath: webpack_config_1.default.output.publicPath,
    hot: true,
    historyApiFallback: true
});
server.listen(config.localWebpackPort, 'localhost', function () {
});
//# sourceMappingURL=webpack-server.js.map