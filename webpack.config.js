const path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const dotenv = require('dotenv');
// Load environment variables from .env file
dotenv.config();
module.exports = {
    entry: {
        index: './src/js/main.js',
        privacy: './src/js/privacy.js',
        terms: './src/js/terms.js',
        form: './src/js/form.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js', // Use different names for different entries
        clean: true, // Clean the output directory before emit
        assetModuleFilename: 'images/[name][ext]', // Add this line for image outputs
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('postcss-import'),
                                    require('tailwindcss'),
                                    require('autoprefixer'),
                                ],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.html$/,
                use: ['html-loader']  // Add this rule for HTML files
            },
        ],
    },
    plugins: [
        // Create separate HTML files for each entry
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            chunks: ['index'], // Specify which bundle to include
        }),
        new HtmlWebpackPlugin({
            template: './src/privacy.html',
            filename: 'privacy.html',
            chunks: ['privacy'], // Specify which bundle to include
        }),
        new HtmlWebpackPlugin({
            template: './src/terms.html',
            filename: 'terms.html',
            chunks: ['terms'], // Specify which bundle to include
        }),
        new HtmlWebpackPlugin({
            template: './src/form.html',
            filename: 'form.html',
            chunks: ['form'], // Specify which bundle to include
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'COMPANY_NAME': JSON.stringify(process.env.COMPANY_NAME),
                'COMPANY_EMAIL': JSON.stringify(process.env.COMPANY_EMAIL),
                'COMPANY_PHONE': JSON.stringify(process.env.COMPANY_PHONE),
                'COMPANY_ADDRESS': JSON.stringify(process.env.COMPANY_ADDRESS),
                'COMPANY_LOGO': JSON.stringify(process.env.COMPANY_LOGO),
                'COMPANY_IMAGE': JSON.stringify(process.env.COMPANY_IMAGE),
                'COMPANY_COLOR': JSON.stringify(process.env.COMPANY_COLOR || 'blue'),
            }
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3000,
        hot: true,
        open: true, // Opens browser automatically
        historyApiFallback: true, // Enables routing in dev server
    },
    // Add optimization for splitting code
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
};