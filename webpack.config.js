const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');
const zopfli = require('@gfx/zopfli');

const entry = './src/App.js';
const output =  {
                    path: path.resolve(__dirname, './dist'),
                    filename: "js/app.js",
                    chunkFilename: "js/[name].js"
                };
const rules = [
                    {
                        test:/\.(js|jsx)$/,
                        exclude: /(node_modules|bower_components)/,
                        use:['babel-loader']
                    },
                    {
                        test: [/.css$|.scss$/],
                        use:[
                            MiniCssExtractPlugin.loader,
                            'css-loader',
                            'sass-loader',
                        ]
                    },
                    {
                        test: /\.(png|jpg|gif|svg)$/,
                        use: [
                        {
                            loader: 'file-loader',
                            options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/images'
                            }
                        }
                        ]
                    }
                ];



module.exports = mode => {
    if (mode === "development"){
        console.log("je suis en developoment");
        return {
            mode,
            devtool: "inline-source-map",
            entry: entry,
            watch: true,
            output: output,
            module:{
                rules: rules
            },
            optimization : {
                splitChunks: {
                    chunks: "all",
                    name: "vendors",
                    cacheGroups: {
                        vendors: {
                            test: /[\\/]node_modules[\\/]/,
                            priority: -10
                        },
                        default:{
                            minChunks:2,
                            priority: -20,
                            reuseExistingChunk: true
                        }
                    }
                }
            },
            plugins: [
                new CleanWebpackPlugin(),
                new HtmlWebPackPlugin({
                    template: "./src/index.html",
                    filename: "./index.html"
                })
                ,
                new MiniCssExtractPlugin({
                   filename: "[name].css",
                   chunkFilename: "[id].css"
                }),
                new webpack.HotModuleReplacementPlugin(),
                new BundleAnalyzerPlugin()
            ],
            devServer: {
                contentBase: path.resolve(__dirname, 'dist/'),
                stats: 'errors-only',
                open: true,
                port: 3000,
                compress: true
            },
        }
    }
    else{
        console.log("je suis en production");
        return {
            mode,
            entry: entry,
            output: output,
            module:{
                rules: rules
            },
            plugins: [
                new CleanWebpackPlugin(),
                new HtmlWebPackPlugin({
                    inject: true,
                    hash: true,
                    template: "./src/index.html",
                    filename: "./index.html",
                }),
                new MiniCssExtractPlugin({
                    filename: "main.[contenthash].css",
                    chunkFilename: "[id].css"
                }),
                new CompressionPlugin({
                    compressionOptions: {
                        numiterations: 15,
                    },
                    algorithm(input, compressionOptions, callback) {
                        return zopfli.gzip(input, compressionOptions, callback);
                    },
                }),
            ],
            optimization: {
                minimizer: [new TerserPlugin(),new OptimizeCSSAssetsPlugin({})],
            },
        }
    }
}