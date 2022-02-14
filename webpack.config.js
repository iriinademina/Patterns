const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
    mode: 'development',
    entry: './src/app.ts',
    plugins: [
        new HtmlWebpackPlugin({
         title: 'Development',
        }),
      ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    }, 
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
      },
    module : {
        rules: [
            {
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
};