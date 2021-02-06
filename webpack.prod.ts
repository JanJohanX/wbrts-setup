const { merge: mergeProd } = require('webpack-merge');
const commonProd = require('./webpack.config.ts');
const pathProd = require('path');

module.exports = mergeProd( commonProd, {
    mode: 'production',
    output: {
        path: pathProd.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    }
})