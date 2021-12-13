const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-bandle.js'
    },

    module:{
        rules: [
            {
                test:/\.css$/i,
                use:['style-loader','css-loader'],
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env']
                    }
                  }
                
            }
        ],
    },

    // devServer:{
    //     port: 4444,
    //     open: true,
    //     stats: 'error-only',
    // },
}; 