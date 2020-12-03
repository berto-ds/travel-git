module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'bundled.js',
        path: __dirname + '/app'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader?url=false',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [

                                    require('postcss-simple-vars'),
                                    require('postcss-nested'),
                                    require('autoprefixer')



                                ]
                            }

                        }
                    }
                ]
            }
        ]
    }
}