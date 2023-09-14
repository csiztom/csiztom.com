module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended','plugin:svelte/prettier', 'prettier'],
	plugins: ['@typescript-eslint','prettier'],
	ignorePatterns: ['*.cjs'],
	overrides: [{
		files: ['**/*.svelte'],
		parser: 'svelte-eslint-parser',
		parserOptions: {
			parser: '@typescript-eslint/parser'
		}
	},],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2022,
		extraFileExtensions: ['.svelte'],
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	rules: {
		// Possible Errors
		'svelte/infinite-reactive-loop': 1,
		'svelte/no-dom-manipulating': 1,

		// Security Vulnerability
		'svelte/no-target-blank': 2,

		// Best Practices
		'svelte/no-reactive-functions': 1,
		'svelte/no-reactive-literals': 1,
		'svelte/no-useless-mustaches': 1,

		// Stylistic
		'svelte/sort-attributes': 1,
		'prettier/prettier': ['error', { endOfLine: 'auto' }],

		// JS
		'import/no-named-as-default': 0, // with ts declarations, non-default exports can function as default, which this doesn't like
		'object-property-newline': [
			'error',
			{
				allowAllPropertiesOnSameLine: true,
			},
		],
		'no-multiple-empty-lines': 'warn',
		'unicorn/number-literal-case': 0,
		'no-console': ['warn', { allow: ['warn', 'error'] }],
		'no-labels': ['error', { allowLoop: true }],
	},
};
