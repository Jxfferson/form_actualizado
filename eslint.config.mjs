/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'eslint/config';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import babelParser from '@babel/eslint-parser';
import globals from 'globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  {
    ignores: ['**/dist/', '**/build/'],

    extends: compat.extends('airbnb-base'),

    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.mjs'],
        },
      },
    },

    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
    },

    rules: {
      // airbnb defaults conflict with your use of __filename/__dirname
      'no-underscore-dangle': ['error', { allow: ['__dirname', '__filename'] }],

      // aceptar imports desde devDependencies dentro de tu config
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],

      // desactiva error que reporta imports internos al config file
      'import/no-unresolved': 'off',

      'no-shadow': 'off',
      'no-param-reassign': 'off',
      'eol-last': 'off',
      'import/extensions': [1, { js: 'always', json: 'always' }],
    },
  },
]);
