const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const dotenv = require('dotenv');
const HTMLWebpackPlugins = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

dotenv.config();

const production = process.env.NODE_ENV === 'production'; 

module.exports = {
    entry: path.resolve(__dirname, '..', './src/index.tsx'),
    output: {
        path: path.resolve(__dirname, '..', './dist'),
        filename: production
            ? 'static/scripts/[name].[contenthash].js'
            : 'static/scripts/[name].js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    production ? MiniCssExtractPlugin.loader : 'style-loader', 
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]__[hash:base64:5]',
                                auto: /\.module\.\w+$/i,
                            },
                            importLoaders: 2,
                        },
                    },
                    'postcss-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif|webp)$/,
                type: 'asset/resource',
                    generator: {
                        filename: 'static/images/[hash][ext][query]',
                    },
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack', 'url-loader'],
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/,
                type: 'asset/resource',
                    generator: {
                        filename: 'static/fonts/[hash][ext][query]',
                    },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'],
        alias: {
            '@components': path.resolve(__dirname, '..', './src/components'),
            '@assets': path.resolve(__dirname, '..', './src/assets'),
            '@images': path.resolve(__dirname, '..', './src/assets/images'),
            '@pages': path.resolve(__dirname, '..', './src/pages'),
            '@slices': path.resolve(__dirname, '..', './src/services/slices'),
            '@store': path.resolve(__dirname, '..', './src/services/store'),
            '@ui': path.resolve(__dirname, '..', './src/components/ui'),
            '@utils': path.resolve(__dirname, '..', './src/utils'),
        }
    },
    plugins: [
        new HTMLWebpackPlugins({
           template: path.resolve(__dirname, '..', 'public/index.html')
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'static/styles/index.css',
        }),
        new webpack.DefinePlugin({
            'process.env.URL': JSON.stringify(process.env.URL),
        }),
        new Dotenv(),
        new ESLintPlugin({
            extensions: ['js', 'jsx', 'ts', 'tsx'],
            emitWarning: true,
            failOnError: false,
          }),
    ],
};
