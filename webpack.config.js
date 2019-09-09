const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    // 監聽
    watch: true,

    // development (開發模式未壓縮) | production (產品模式可壓縮)
    mode: 'development',

    // 進入點，每個頁面使用一個 JS 檔
    entry: {
        index: './src/index.js'
    },

    // 自動輸出位置，我們對應到 ./dist/[檔名].js
    output: {
        path: path.resolve(__dirname, 'dist'), // JS 輸出點路徑
        filename: '[name].js',
        publicPath: 'dist/'
    },

    // 絕對路徑的別名
    resolve: {
        alias: {
            '@md': path.resolve(__dirname, 'src/md'),
            '@scss': path.resolve(__dirname, 'src/scss'),
        }
    },


    // 優化設置
    optimization: {

        // // 分離區塊
        // splitChunks: {
        //     chunks: 'initial',
        //     cacheGroups: {
        //
        //         // 將 import 路徑出現 "\node_modules\" 或 "\md\global\" 或 "\scss\global\" 底下的共用程式碼
        //         // 分離到 vendors.js
        //         vendors: {
        //             test: /[\\/]node_modules[\\/]|[\\/]md[\\/]global[\\/]|[\\/]scss[\\/]global[\\/]/,
        //             name: "vendors",
        //         }
        //     }
        // }
    },

    // 需要時再啟動，並搭配 UglifyJSPlugin sourceMap
    // devtool: 'source-map',


    // 讓 jQuery 可以在不同的文件使用
    plugins: [
        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery'
        // }),
        // 需要時再啟用
        // new UglifyJSPlugin({
        //     sourceMap: true
        // })
    ],

    // SUSY SASS 相關設置
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader", // compiles Sass to CSS
                    options: {
                        includePaths: ["./src/scss"] // 指定讀取的位置
                    }
                }]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loader:"file-loader",
                query:{
                    // 圖片會接在 dist/images/
                    // 圖片若要在 <style> 使用，例如 background: url(dist/images/image.png);
                    name:'[name].[ext]',
                    outputPath:'images/'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};