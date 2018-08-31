const path = require('path')

module.exports = {
    entry: './src/client/index.js',
    // tell webpack where to put file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },

    // tell webpack to run babel in every file it runs through

    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', {targets: {browsers: ['last 2 versions']}}]
                    ]
                }
            }
        ]
    }

}