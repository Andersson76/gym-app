const webpack = require("@cypress/webpack-preprocessor");
const path = require("path");

module.exports = (on, config) => {
  const options = {
    webpackOptions: {
      resolve: {
        extensions: [".ts", ".js"],
      },
      module: {
        rules: [
          {
            test: /\.ts$/,
            exclude: /node_modules/,
            use: [
              {
                loader: "ts-loader",
                options: {
                  transpileOnly: true,
                },
              },
            ],
          },
        ],
      },
    },
  };

  on("file:preprocessor", webpack(options));
  return config;
};
