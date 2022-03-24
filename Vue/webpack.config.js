const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader').VueLoaderPlugin

// css匹配规则配置
const cssLoaderRules = function () {
    return [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      }
    ]
}

module.exports = {
    mode: 'development',
    entry: {
        index: path.resolve(__dirname, './src/main.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            ...cssLoaderRules()
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '组件库',
            chunks: ['index'],
            template: 'public/index.html',
            filename: 'index.html'
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
        // 类似 webpackOptions.output里面的配置 可以忽略
        filename: '[name]/style.css'
        })
    ],
    resolve: {
        extensions: ['.css', '.js', '.vue']
    },
}