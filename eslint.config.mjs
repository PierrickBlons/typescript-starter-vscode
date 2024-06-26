// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigDirName: import.meta.dirname,
      },
    },
  },
  {
    files: ["*.js", "*.mjs"],
    ...tseslint.configs.disableTypeChecked,
  },
  {
    ignores: ["dist/", "*.config.js"],
  }
);