# Code Citations

## License: unknown
https://github.com/fukai03/webpack-demo/tree/bb0f71f0fe11de717201a4bd4af96377721ee9d1/demo7/webpack.config.js

```
config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename:
```


## License: unknown
https://github.com/AndrzejPiasek/reno/tree/e796cc6b3098dd2b15954c5bcf57e4e7c0451379/webpack.config.js

```
: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
```

