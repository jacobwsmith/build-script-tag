const path = require("path");

module.exports = {
  entry: {
    product1: "./src/product1/index.ts",
    product2: "./src/product2/index.ts"
  },
  // devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist-webpack")
  },
};
