import webpack from "@cypress/webpack-preprocessor";
import coverage from "@cypress/code-coverage/task";
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
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

      coverage(on, config);

      return config;
    },
  },
});
