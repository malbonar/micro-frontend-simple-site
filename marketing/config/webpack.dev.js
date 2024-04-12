const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const { ModuleFederationPlugin } = require('webpack').container;

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:3001/'
    },
    devServer: {
        port: 3001,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './Marketing': './src/bootstrap'
            },
            shared: ['react', 'react-dom', '@material-ui/core/styles']
        })
    ]
}

module.exports = merge(commonConfig, devConfig);