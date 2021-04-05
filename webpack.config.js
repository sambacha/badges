module.exports = {
  mode: "production",
  context: __dirname,
  entry: "./vyper",
  output: {
    path: __dirname + "/dist",
    filename: "vyperlang.js",
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: "file-loader",
          },
          {
            loader: "./index.js",
          },
        ],
      },
    ],
  },
};
