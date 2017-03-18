var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: {
	javascript: './js/app.js'
    },
    output: {
        path: __dirname + '/',
        filename: "app_packed.js"
    },
    plugins: [/*
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('production')
          }
        }),
        new webpack.optimize.UglifyJsPlugin({
          compressor: {
            warnings: false
          }
        }),*/
        new ExtractTextPlugin('styles.css')
    ],
    resolve: {
        extensions: ['.html', '.js', '.jsx', '.json']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                options: {
                    presets: ['react', 'es2015', 'stage-2'],
                },
                loader: 'babel-loader'
            },
	        {
                /*test: /\.html$/,*/
                test: /\.(jpg|png|svg|html)$/,
                exclude: /node_modules/,
                loader: 'file-loader'
            },
	        {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            }	
        ]
   }
};