module.exports = {

    context: __dirname,
    entry: './app/index.js',
    output: {
        path: __dirname,
        filename: './bundle.js'
    },
    devServer: {
        port: 3333,
        inline: true
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,loader: 'babel',exclude: /node_modules/,
                    query: {
                    presets: ['es2015']
                }
            },
            { test: /\.html$/, loader: 'raw', exclude: /node_modules/ },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            {
                test: /\.woff2$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]"
            },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
            { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
            { test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/, loader: 'file', exclude: /node_modules/ }
            ,
            {
                test: /\.scss$/,
                loaders: ["style", "css?sourceMap","sass?sourceMap"]
            }
        ]

    }

};