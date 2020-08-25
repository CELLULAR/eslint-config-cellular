const production = process.env.NODE_ENV === 'production';

module.exports = {
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
    'simple-import-sort/sort': 'warn',
  },
};
