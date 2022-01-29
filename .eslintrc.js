module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
    },
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'airbnb-typescript',
        'next',
        'next/core-web-vitals',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
    ],
    rules: {
        '@typescript-eslint/no-empty-interface': 'off',
        'react/prop-types': 'off',
        'react/no-danger': 'off',
        'react/jsx-uses-react': 'off',
        '@next/next/no-document-import-in-page': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'off',
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: ['.storybook/**', '**/*.stories.tsx', '**/*.test.tsx'],
            },
        ],
        'no-console': ['error', {allow: ['error', 'warn']}],
    },
    ignorePatterns: [
        '.eslintrc.js',
        'next.config.js',
        'apollo.config.js',
        'postcss.config.js',
        'tailwind.config.js',
    ],
};
