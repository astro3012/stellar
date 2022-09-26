module.exports = {
    env: {
        jest: true,
        browser: true,
        node: true,
        es6: true,
    },
    // parser: 'babel-eslint',
    parser: '@typescript-eslint/parser',
    extends: [
        'prettier',
        'prettier/react',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            modules: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
    plugins: ['react', 'prettier', '@typescript-eslint'],
    rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/member-delimiter-style': [
            'error',
            {
                multiline: {
                    delimiter: 'none', // 'none' or 'semi' or 'comma'
                    requireLast: true,
                },
                singleline: {
                    delimiter: 'semi', // 'semi' or 'comma'
                    requireLast: false,
                },
            },
        ],
        'prettier/prettier': ['error', { endOfLine: 'auto' }],
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
        'react/forbid-prop-types': [0, { forbid: ['any'] }],
        'react/prop-types': 0,
    },
}
