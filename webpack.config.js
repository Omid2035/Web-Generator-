const path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const dotenv = require('dotenv');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// Load environment variables from .env file
dotenv.config();

module.exports = {
    entry: {
        index: './src/pages/home/index.js',
        "privacy-policy": './src/pages/privacy-policy/index.js',
        "terms": './src/pages/terms/index.js',
        form: './src/pages/form/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js', // Use different names for different entries
        clean: true, // Clean the output directory before emit
        assetModuleFilename: 'assets/[name][ext]', // Simplified asset naming
        publicPath: '/', // Set public path for all assets
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
                test: /\.html$/,
                use: ['html-loader']  // Add this rule for HTML files
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        // Copy assets directory directly to dist/src to maintain path structure
        new CopyWebpackPlugin({
            patterns: [
                { 
                    from: 'src/assets', 
                    to: 'src/assets', 
                    globOptions: {
                        ignore: ['**/*.js']
                    }
                }
            ],
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/assets/robots.txt', to: 'robots.txt' }
            ]
        }),
        // Create separate HTML files for each entry
        new HtmlWebpackPlugin({
            template: './src/pages/home/index.html',
            filename: 'index.html',
            chunks: ['index'], // Specify which bundle to include
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/privacy-policy/index.html',
            filename: 'privacy-policy.html',
            chunks: ['privacy-policy'], // Specify which bundle to include
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/terms/index.html',
            filename: 'terms.html',
            chunks: ['terms'], // Specify which bundle to include
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/form/index.html',
            filename: 'form.html',
            chunks: ['form'], // Specify which bundle to include
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
    ],
    devServer: {
        static: [
            {
                directory: path.join(__dirname, 'dist'),
            },
            {
                directory: path.join(__dirname, 'src'),
                publicPath: '/src',
            }
        ],
        compress: true,
        port: 8002,
        hot: true,
        open: true, // Opens browser automatically
        historyApiFallback: true, // Enables routing in dev server
    },
    // Add optimization for splitting code
    optimization: {
        minimize: false,

        // splitChunks: {
        //     chunks: 'all',
        // },
    },
    devtool: 'source-map'
};