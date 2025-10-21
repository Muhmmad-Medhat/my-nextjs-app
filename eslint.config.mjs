// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  // Global ignores - must be first
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      '*.config.js',
      '*.config.ts',
      'next-env.d.ts',
      '.env*',
      '**/*.tsbuildinfo',
      'package-lock.json',
      'storybook-static/**',
    ],
  },
  ...compat.extends(
    'next',
    'prettier',
    'next/typescript',
    'eslint:recommended',
    'next/core-web-vitals',
    'plugin:react/jsx-runtime',
    'plugin:react/recommended',
    'plugin:@next/next/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended'
  ),
  {
    files: ['**/*.{js,jsx}'],
    plugins: ['react-hooks'],
  },
  {
    /** @type {import('eslint').Linter.RulesRecord} */
    rules: {
      '@next/next/no-page-custom-font': 'error',
      'no-unused-vars': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      'no-console': 'warn',
      'no-duplicate-imports': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  ...storybook.configs['flat/recommended'],
];

export default eslintConfig;
