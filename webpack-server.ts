import * as webpackDevServer from 'webpack-dev-server'
import * as webpack from 'webpack'
import webpackDevConfig from './webpack.config'
import * as config from './config'

var server = new webpackDevServer(webpack(webpackDevConfig), {
    publicPath: webpackDevConfig.output.publicPath,
    hot: true,
    historyApiFallback: true
})

server.listen(config.localWebpackPort, 'localhost', function () {
})