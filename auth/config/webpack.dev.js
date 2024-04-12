const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const { ModuleFederationPlugin } = require('webpack').container;

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:3002/'
    },
    devServer: {
        port: 3002,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            name: 'authentication',
            filename: 'remoteEntry.js',
            exposes: {
                './Auth': './src/bootstrap.js'
            },
            shared: ['react', 'react-dom', '@material-ui/core/styles']
        })
    ]
}

module.exports = merge(commonConfig, devConfig);