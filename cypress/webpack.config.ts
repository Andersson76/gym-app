import { Configuration } from "webpack";

const webpackConfig: Configuration = {
  resolve: {
    alias: {
      "node:test": false,
    },
    fallback: {
      fs: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            transpileOnly: true,
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
};

export default webpackConfig;
