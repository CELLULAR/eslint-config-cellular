const production = process.env.NODE_ENV === 'production';

module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  extends: [
    'airbnb-typescript',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
    'prettier/flowtype',
    'prettier/react',
    'prettier/standard',
  ],
  plugins: [
    'filenames',
    'react',
    'react-hooks',
    'prettier',
    'simple-import-sort',
  ],
  rules: {
    'no-console': [production ? 2 : 1, { allow: ['error', 'warn', 'info'] }],
    'no-debugger': production ? 2 : 1,
    'filenames/match-exported': 2,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
      },
    ],
    'import/prefer-default-export': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-boolean-value': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/prop-types': 0,
    'simple-import-sort/sort': 'error',
    '@typescript-eslint/semi': 0,
  },
};
