const production = process.env.NODE_ENV === 'production';

module.exports = {
  rules: {
    'no-console': [production ? 2 : 1, { allow: ['error', 'warn', 'info'] }],
    'no-debugger': production ? 2 : 1,
    'no-underscore-dangle': 0,
    'import/prefer-default-export': 0,
    'simple-import-sort/sort': 'warn',
  },
};
