const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = [
    {
        context: path.join(__dirname, ""),
        entry: ["@babel/polyfill", "./src/js/client.js"],
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /(node_modules|bower_components)/,
                    use: [{
                        loader: 'babel-loader',
                        options: {
                            plugins: ['react-html-attrs'],
                            presets: ['@babel/preset-react', '@babel/preset-env']
                        }
                    }]
                },
                {
                    test: /\.scss$/, 
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        'css-loader',
                        'sass-loader'
                    ],
                },
                {
                    test: /\.(jpg|png|ico)$/,
                    use: 'url-loader'
                },
            ]
        },
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: "client.min.js"
        },
        plugins: [
            new MiniCssExtractPlugin({
              filename: 'style.css',
            }),
            new CopyWebpackPlugin([
                { from: 'src/index.html' },
                { from: 'src/img/favicon.ico' },
                { from: 'src/img/', to: './img' },
            ]),
        ],
        optimization: {
            minimizer: [new TerserJSPlugin({}),new OptimizeCSSAssetsPlugin({})],
        },
    }
];