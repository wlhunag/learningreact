module.exports = {
    entry: [
        './src/main.js'
    ],
    output: {
        path: __dirname+'/resources/js',
        publicPath: '/resources/js',
        filename: 'admin.js'
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015', 'stage-1']
            }
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        host: '127.0.0.1',
        port: 3000,
        historyApiFallback: true,
        contentBase: './'
    }
};