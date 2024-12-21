import { defineConfig } from "cypress";
import webpackConfig from "./cypress/webpack.config";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "http://localhost:3000",
    env: {
      NEXT_PUBLIC_API_URL: "http://localhost:5004",
    },
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
      webpackConfig,
    },
  },
});
