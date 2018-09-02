const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const produção = process.env.NODE_ENV == 'production';

const config = {
    mode: produção ? 'production' : 'development',
    entry: './src/componentes/App.tsx',
    output: {
        filename: '[name].[contenthash].js',
        path: `${__dirname}/dist`,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            '@babel/preset-typescript'
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties',
                            produção ? '@babel/plugin-transform-react-inline-elements' : {},
                            produção ? 'transform-remove-console' : {}
                        ],
                        cacheDirectory: true
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
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
                    },
                    'typed-css-modules-loader'
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
}

console.log('produção', produção);
module.exports = config;