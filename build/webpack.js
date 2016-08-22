const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const path = require("path");
const port = 8000;
var config = {
    entry: [
        'webpack-dev-server/client?http://localhost:' + port,
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, "../src/entries/index")
    ],
    output: {
        path: path.resolve(__dirname, "../dist/"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ["", ".js", ".jsx"]
    },
    module: {
        preLoaders: [],
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                include: path.resolve(__dirname, "../src")
            },
            {
                test: /\.jsx$/,
                loader: "babel-loader",
                include: path.resolve(__dirname, "../src")
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader?modules&localIdentName=[local]_[hash:base64:5]!less-loader"
            },
            {
                test: /\.(png|jpeg|gif)$/,
                loader: 'url-loader?limit=8192',
            },
            {
                test: /\.svg$/,
                loader: "file-loader"
            },
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify('true')
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
        //new webpack.NoErrorsPlugin()
    ]
}

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
    contentBase: "dist/",
    hot: true,
    inline: true,
    progress: true,
    historyApiFallback: true
});

server.listen(port);