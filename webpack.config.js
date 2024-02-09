const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => { return {
    entry: ['./src/index.tsx', './src/resources/style.scss'],
    devtool: 'inline-source-map',
    mode: env.production ? "production" : "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.scss', '.sass'],
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './src/resources',
                    to: './resources',
                    globOptions: {
                        ignore: ['**/*.scss'],
                    },
                },
                
            ],
        }),
        env.production ?? new CopyWebpackPlugin({
            patterns: [
                {
                    from: './manifest.json',
                    to: './manifest.json'
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: './style.min.css',
        })
    ],
    output: {
        filename: env.production ? "bundle.min.js" : "bundle.js",
        path: path.resolve(__dirname, env.production ? 'dist/prod' : 'dist/dev'),
    },
}};
