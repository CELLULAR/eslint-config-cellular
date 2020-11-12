const production = process.env.NODE_ENV === 'production';

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'react/prop-types': 0,
    'react/destructuring-assignment': 0,
    '@typescript-eslint/no-unused-vars': production ? 2 : 1,
  },
};
