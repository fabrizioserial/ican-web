module.exports = {
	env: {
		node: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'standard',
		'prettier',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'prettier'],
	rules: {
		'no-undef': 0,
		'no-case-declarations': 0,
		'no-unused-vars': 0,
		'react/react-in-jsx-scope': 0,
		'react/prop-types': 0,
		'prefer-const': 0,
		'react/jsx-key': 0,
		'react/display-name': 0,

	},
	settings: {
		react: {
			version: '^17.0.2', // React version. "detect" automatically picks the version you have installed.
			// You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
			// It will default to "latest" and warn if missing, and to "detect" in the future
		},
	},
};
