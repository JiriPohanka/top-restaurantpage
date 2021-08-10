//Webpack requires this to work with directories
const path = require('path');

// This is main configuration object that tells Webpackw what to do. 
module.exports = {
    //path to entry paint
    entry: './src/index.js',
    //path and filename of the final output
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },

    //default mode is production
    mode: 'development',

}

modules: {

    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }
    ]
}