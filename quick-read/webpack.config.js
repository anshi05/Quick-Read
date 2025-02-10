const path = require('path'); 
module.exports = {
    entry: {
      background: './src/background.js',
      popup: './src/components/popup.jsx', // Ensure this entry is defined for popup.jsx
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  };
  