import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";
import webpackConfig from "./cypress/webpack.config";

export default defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    baseUrl: "http://localhost:3000",
    env: {
      NEXT_PUBLIC_API_URL: "http://localhost:5004",
      stepDefinitions: "cypress/e2e/step_definitions/**/*.{js,ts}",
    },
    specPattern: "cypress/e2e/features/*.feature",
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
      webpackConfig,
    },
  },
});
