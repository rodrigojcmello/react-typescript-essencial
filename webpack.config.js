const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');
const produção = process.env.NODE_ENV == 'production';

const config = {
    mode: produção ? 'production' : 'development',
    entry: './src/componentes/App.tsx',
    output: {
        filename: '[name].[contenthash].js',
        path: `${__dirname}/dist`,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'awesome-typescript-loader'
            },
            {
                test: /\.js$/,
                use: 'source-map-loader',
                enforce: 'pre'
            },
            {
                enforce: 'pre',
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: 'typed-css-modules-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: !produção,
                            localIdentName: '[name]__[local]--[hash:base64:5]'
                        }
                    },
                    'sass-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [autoprefixer()]
                        }
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|eot|woff2?|ttf|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: { name: produção ? 'assets/[hash].[ext]' : 'assets/[name].[hash].[ext]' }
                }]
            }]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './index.html' }),
        new webpack.WatchIgnorePlugin([/css\.d\.ts$/])
    ],
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    }
};

if (produção) {
    config.plugins.push(
        new CleanWebpackPlugin(['dist']),
    )
} else {
    config.devtool = 'source-map';
    config.plugins.push(
        new CheckerPlugin()
    )
}

console.log('produção', produção);
module.exports = config;