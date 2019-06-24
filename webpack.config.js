const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = mode => {
    if (mode === "development"){
        console.log("je suis en developoment");
        return {
            mode,
            entry: './src/App.js',
            watch: true,
            output: {
                path: path.resolve('dist'),
                filename: 'bundle.js'
            },
            module:{
                rules:[
                    {
                        test:/\.js$/,
                        exclude: /(node_modules|bower_components)/,
                        use:['babel-loader']
                    }
                ]
            },
            plugins: [
                new HtmlWebPackPlugin({
                template: "./src/index.html",
                filename: "./index.html"
                })
            ],
        }
    }
    else{
        console.log("je suis en production");
        return {
            mode,
            entry: './src/App.js',
            watch: true,
            output: {
                path: path.resolve('dist'),
                filename: 'bundle.js'
            },
            module:{
                rules:[
                    {
                        test:/\.js$/,
                        exclude: /(node_modules|bower_components)/,
                        use:['babel-loader']
                    }
                ]
            },
            plugins: [
                new HtmlWebPackPlugin({
                template: "./src/index.html",
                filename: "./index.html"
                })
            ],
        }
    }
}