// webpack.config.js

module.exports = {
  // other webpack configurations

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', // injects styles into DOM
          'css-loader',   // translates CSS into CommonJS
          'sass-loader'   // compiles Sass to CSS
        ]
      }
    ]
  }
};
