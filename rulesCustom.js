const production = process.env.NODE_ENV === 'production';

module.exports = {
  extends: ['plugin:import/errors', 'plugin:import/warnings'],
  plugins: ['filenames', 'simple-import-sort'],
  rules: {
    'no-console': [production ? 2 : 1, { allow: ['error', 'warn', 'info'] }],
    'no-debugger': production ? 2 : 1,
    'no-underscore-dangle': 0,
    'import/prefer-default-export': 0,
    'simple-import-sort/sort': 'warn',
    'filenames/match-exported': 2,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
      },
    ],
  },
};
