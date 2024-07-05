import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import pluginReactCompiler from "eslint-plugin-react-compiler";


export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  plugins: {
    'react-compiler':  pluginReactCompiler
  },
  "rules": {
        "react-compiler/react-compiler": "error"
    }
  },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
];
