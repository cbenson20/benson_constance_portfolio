import eslintPluginReact from "eslint-plugin-react";
import eslintPluginPrettier from "eslint-plugin-prettier";

import eslintParser from "@typescript-eslint/parser";
import eslintTSPlugin from "@typescript-eslint/eslint-plugin";

export default [
  {
    files: ["src/**/*.{ts,tsx}"],
    ignores: ["dist/**"],
    languageOptions: {
      parser: eslintParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react: eslintPluginReact,
      prettier: eslintPluginPrettier,
      "@typescript-eslint": eslintTSPlugin,
    },
    rules: {
      "prettier/prettier": "error",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
];
