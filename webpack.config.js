// const webpack = require('webpack');
// const path = require('path');
// const fs = require('fs');
//
// let nodeModules = {};
// fs.readdirSync('node_modules')
//     .filter(function (x) {
//         return ['.bin'].indexOf(x) === -1;
//     })
//     .forEach(function (mod) {
//         nodeModules[mod] = 'commonjs ' + mod;
//     });
//
// module.exports = {
//     entry: './src/index.ts',
//     target: 'node',
//     output: {
//         filename: 'index.js',
//         path: path.resolve(__dirname, 'dist')
//     },
//     devtool: 'source-map',
//     resolve: {
//         // Add `.ts` and `.tsx` as a resolvable extension.
//         extensions: [".ts", ".tsx", ".js"]
//     },
//     module: {
//         rules: [
//             { test: /\.tsx?$/, loader: "ts-loader" }
//         ]
//     },
//     mode: "development"
// };
const path = require('path'), net = require('net'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

const sourcePath = path.join(__dirname, './src'),
    buildPath = path.join(__dirname, process.env.NODE_ENV === 'test' ? './dist-testing' : './dist');

const conf = {
    mode: "development",
    entry: {
        main: "./src/index.ts",
    },
    output: {
        filename: 'index.js',
        path: buildPath
    },
    target: 'node',
    plugins: [],
    devtool: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') ? 'source-map' : false,
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"],
        alias: {'@src': sourcePath}
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {test: /\.tsx?$/, loader: "awesome-typescript-loader", exclude: /node_modules/},

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {enforce: "pre", test: /\.js$/, loader: "source-map-loader", exclude: /node_modules/},
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, process.env.NODE_ENV === 'test' ? "dist-testing" : "dist"),
        compress: true,
        disableHostCheck: true,
        host: '0.0.0.0',
        port: 9000,
        hot: true,
        https: true,
    },
};

module.exports = conf;