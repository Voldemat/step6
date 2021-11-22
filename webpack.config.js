
const path = require("path");
module.exports = {
  module: {
    rules: [   
       
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { url: false },
          },
        ],
      }

    ],
  },
  entry: {
    path: path.resolve(__dirname, "compileCss.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[contenthash].js",
    clean: true,
  }
};
