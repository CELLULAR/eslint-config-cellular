const production = process.env.NODE_ENV === 'production';

module.exports = {
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: ['airbnb-typescript'],
  rules: {
    '@typescript-eslint/semi': 0,
    '@typescript-eslint/no-unused-vars': production ? 2 : 1,
    '@typescript-eslint/indent': 0,
  },
};
