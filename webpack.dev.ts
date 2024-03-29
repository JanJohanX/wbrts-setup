const { merge: mergeDev } = require('webpack-merge');
const commonDev = require('./webpack.config.ts');
const pathDev = require('path');

module.exports = mergeDev(commonDev, {
    mode: 'development',
    output: {
        path: pathDev.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: './build',
        port: process.env.APP_PORT || 3000,
        historyApiFallback: true,
    },
});
