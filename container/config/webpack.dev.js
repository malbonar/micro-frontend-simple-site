const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const { ModuleFederationPlugin } = require('webpack').container;

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:3000/'
    },
    devServer: {
        port: 3000,
        historyApiFallback: true
    },
    plugins: [      
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: 'marketing@http://localhost:3001/remoteEntry.js',
                auth: 'auth@http://localhost:3002/remoteEntry.js'
            },
            shared: ['react', 'react-dom', '@material-ui/core/styles']
        })
    ]
}

module.exports = merge(commonConfig, devConfig);
