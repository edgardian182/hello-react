var path = require('path');

module.exports = {
  entry: './public/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    alias: {
      Greeter: path.resolve(__dirname, 'public/components/Greeter.js'),
      GreeterForm: path.resolve(__dirname, 'public/components/GreeterForm.js'),
      GreeterMessage: path.resolve(__dirname, 'public/components/GreeterMessage.js')
    },
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ]
          }
        }]
      }
    ]
  }
};
