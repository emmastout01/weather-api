const path = require("path");
const webpack = require("webpack");
require('dotenv').config();

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        use: { loader: "ts-loader" },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: { extensions: ["*", ".js", ".jsx", ".ts", ".tsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js",
  },
  devServer: {
    proxy: {
      "/dist": "localhost:3000",
    },
    static: path.join(__dirname, "public/"),
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env.REACT_APP_WEATHER_API_KEY": JSON.stringify(
        process.env.REACT_APP_WEATHER_API_KEY
      ),
    }),
  ],
};
