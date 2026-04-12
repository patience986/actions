import js from "@eslint/js";
import globals from "globals";
import jest from "eslint-plugin-jest";

export default [
  js.configs.recommended,

  {
    files: ["**/*.test.js", "**/*.spec.js"],
    plugins: {
      jest
    },
    languageOptions: {
      globals: {
        ...globals.node,
        ...jest.environments.globals.globals
      }
    },
    rules: {
      ...jest.configs.recommended.rules
    }
  },

  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.node
    }
  }
];