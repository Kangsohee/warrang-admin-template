import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginQuery from '@tanstack/eslint-plugin-query';
import simpleImportSort from "eslint-plugin-simple-import-sort";


export default tseslint.config(
	{ ignores: ['dist'] },
	{
		extends: [
			...pluginQuery.configs['flat/recommended'],
			js.configs.recommended,
			...tseslint.configs.recommended,
			eslintPluginPrettierRecommended,
		],
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			'simple-import-sort': simpleImportSort,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
			'@typescript-eslint/no-explicit-any': ['warn', { ignoreRestArgs: true }],
			'simple-import-sort/imports': 'error',
			'simple-import-sort/exports': 'error',
		},
	},
);
