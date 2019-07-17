var path = require('path');
var HtmlWbpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './app/index.js',
    //this line makes avoids the eval string
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWbpackPlugin({
            template: 'app/index.html'
        })
    ]
}